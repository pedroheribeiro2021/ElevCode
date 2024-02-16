import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUser } from "../interfaces/user.interface";


export const createSessionService = async ({
    email,
    password,
  }: IUser): Promise<object> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: any = await userRepository.findOneBy({
      email: email,
    })
    
      const token = jwt.sign(
        {
            id: user.id,
        },
        String(process.env.SECRET_KEY),
        {
            subject: String(user.id),
            expiresIn: "30m"
        }
    )

    return {
        id: user.id,
        // data_criacao: user.created_at,
        token,
    }
  }