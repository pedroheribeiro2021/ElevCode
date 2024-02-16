import { Router } from "express"
import { createSessionController, createUserController } from "../controllers/users/user.controllers"

export const sessionRoutes = Router()

sessionRoutes.post("", createSessionController)

export const userRoutes = Router()

userRoutes.post("", createUserController)
