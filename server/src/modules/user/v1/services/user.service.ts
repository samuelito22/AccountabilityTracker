import { CustomApiError } from '@/shared/utils';
import { User, UserProfile } from '../models';
import { Transaction, ForeignKeyConstraintError } from 'sequelize';

interface CreateUserProps {
    userId: string,
    email: string
}

interface CreateUserProfileProps {
    userId: string,
    username: string
}

async function createUserIfNotExists({ userId, email }: CreateUserProps, transaction?: Transaction): Promise<User> {
    try {
        let user = await User.findByPk(userId);
        if (user) throw new CustomApiError(409, 'User with this ID already exists.');

        user = await User.create({ id: userId, email }, { transaction }); 
        return user;
    } catch (error){
        throw error
    }
}

async function createUserProfile({ userId, username }: CreateUserProfileProps, transaction?: Transaction): Promise<UserProfile> {
    try {
        let userProfile = await UserProfile.findOne({ where: { userId } });
        if (userProfile) {
            userProfile = await userProfile.update({ username }, {transaction});
        } else {
            userProfile = await UserProfile.create({ userId, username }, {transaction});
        }
        return userProfile;
    } catch (error) {
        if (error instanceof ForeignKeyConstraintError) {
            throw new CustomApiError(404, 'No such user exists to associate with profile.');
        } else {
            throw error
        }
    }
}

export { createUserIfNotExists, createUserProfile };