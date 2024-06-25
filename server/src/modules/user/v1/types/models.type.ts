export interface IUser {
  id: string
  email: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IUserProfile {
  id: string
  userId: string
  username: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IFeedback {
  id: string
  userId: string
  content: string
  createdAt?: Date
}
