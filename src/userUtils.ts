import { UserData, userId } from '../schemas'
import { getAllMockUsers } from '../mocks/userData'

/**
 * This function will be refactored when have server implementation
 * @param userId - userId
 */
export const getUserDataById = (userId: userId): UserData | undefined => {
    return getAllMockUsers().find((userData) => userData.id === userId)
}
