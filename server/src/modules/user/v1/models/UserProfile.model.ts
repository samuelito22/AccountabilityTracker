import { Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Index } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from './User.model';
import { IUserProfile } from '../types';

type UserProfileCreationAttributes = Optional<IUserProfile, 'createdAt' | 'updatedAt' | 'id'>;

@Table({
    tableName: "user_profiles",
    timestamps: true,
    underscored: true
})
export class UserProfile extends Model<IUserProfile, UserProfileCreationAttributes> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    id!: string;

    @ForeignKey(() => User)
    @Index
    @Column({
        type: DataType.UUID
    })
    userId!: string;  // Definitely assigned in the application logic

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    username!: string;  // Definitely assigned

    @CreatedAt
    createdAt!: Date;  // Managed by Sequelize, so we're sure it's initialized

    @UpdatedAt
    updatedAt!: Date;  // Managed by Sequelize, so we're sure it's initialized

    @BelongsTo(() => User)
    user?: User;  // Optional, as a user profile might not always have an associated user loaded
}
