import { Request, Response } from 'express'
import sequelize from '@/shared/db/sequelize.config'
import { UserServices } from '../services'
import {
  CustomApiError,
  sendErrorResponse,
  sendSuccessResponse,
} from '@/shared/utils'

export const createUser = async (req: Request, res: Response) => {
  const { email, userId, username } = req.body
  const t = await sequelize.transaction()

  try {
    const user = await UserServices.createUserIfNotExists({ userId, email }, t)
    const userProfile = await UserServices.createUserProfile(
      { userId, username },
      t,
    )

    await t.commit()
    sendSuccessResponse(res, 200, 'User profile created successfully', {
      user,
      userProfile,
    })
  } catch (error) {
    await t.rollback()

    if (error instanceof CustomApiError) {
      sendErrorResponse(
        res,
        error.statusCode,
        error.message,
        error,
        'UserProfile',
      )
    } else {
      console.error('Unexpected error:', error)
      sendErrorResponse(
        res,
        500,
        'Internal server error',
        error as Error,
        'UserProfile',
      )
    }
  }
}
