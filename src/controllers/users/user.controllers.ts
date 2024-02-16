import { IUser } from "../../interfaces/user.interface"
import { Request, Response } from "express";
import { createSessionService } from "../../services/createSession.service"
import { createUserService } from "../../services/createUser.service"

export const createSessionController = async(req: Request, res: Response) => {

    const sessionData: IUser = req.body
    const token = await createSessionService(sessionData)
    return res.json(token)
}

export const createUserController = async (req: Request, res: Response) => {

    const userData: IUser = req.body
    
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}