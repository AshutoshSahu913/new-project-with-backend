import express from "express";
import cors from "cors";
//serser se cookie access and use karna cookie per curd
import cookieParser from "cookie-parser";


const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))


//set configuration  - accept json
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

export { app }