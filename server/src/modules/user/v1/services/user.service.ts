import { CustomApiError } from '@/shared/utils'
import { User, UserProfile } from '../models'
import { Transaction, ForeignKeyConstraintError } from 'sequelize'

interface CreateUserProps {
  userId: string
  email: string
}

interface CreateUserProfileProps {
  userId: string
  username: string
}

async function createUserIfNotExists(
  { userId, email }: CreateUserProps,
  transaction?: Transaction,
): Promise<User> {
  const user = await User.findByPk(userId)
  if (user) throw new CustomApiError(409, 'User with this ID already exists.')

  return User.create({ id: userId, email }, { transaction })
}

async function createUserProfile(
  { userId, username }: CreateUserProfileProps,
  transaction?: Transaction,
): Promise<UserProfile> {
  const userProfile = await UserProfile.findOne({ where: { userId } })
  if (userProfile) {
    return userProfile.update({ username }, { transaction })
  } else {
    try {
      return await UserProfile.create({ userId, username }, { transaction })
    } catch (error) {
      if (error instanceof ForeignKeyConstraintError) {
        throw new CustomApiError(
          404,
          'No such user exists to associate with profile.',
        )
      }
      throw error // Re-throw any other errors
    }
  }
}

export { createUserIfNotExists, createUserProfile }
