import express, { Application } from "express"
import cors from "cors"
import { userRoutes, sessionRoutes } from "./routes/user.routes"


export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/login", sessionRoutes)