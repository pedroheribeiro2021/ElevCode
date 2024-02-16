import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

export const createUserService = async (
    userData: object,
  ): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User)
  
    const newUser = userRepository.create({
      ...userData,
    })
  
    await userRepository.save(newUser)
  
    return newUser
  }