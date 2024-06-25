import { Column, CreatedAt, DataType, HasMany, HasOne, Model, Table, UpdatedAt } from "sequelize-typescript";
import { UserProfile } from "./UserProfile.model";
import { Feedback } from "./Feedback.model";
import { Optional } from "sequelize";

interface UserAttributes {
    id: string;
    email: string;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
    stripe_customer_id?: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'createdAt' | 'updatedAt'>;


@Table({
    timestamps: true,
    tableName: "users",
    modelName: "User",
    underscored: true
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true // Validates email format
        }
    })
    email!: string;  // Definitely assigned, should never be null or undefined

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @HasOne(() => UserProfile)
    userProfile?: UserProfile;

    @HasMany(() => Feedback)
    feedbacks?: Feedback[];
}