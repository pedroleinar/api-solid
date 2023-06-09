import { Prisma, User } from '@prisma/client'

export interface UserRepositoryInterface {
    create(user: Prisma.UserCreateInput): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
