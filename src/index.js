// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.on("eroor", (error) => {
            console.log("eroor", error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port: ${process.env.PORT}`);

        })
    })
    .catch((error) => {
        console.log("MONGO db connetion failed !!! ", error);

    })





/* 
//some other apporoch
import express from "express";
const app = express()

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            //other apporoch 
            app.on("error", (error) => {
                console.log("error:", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            })
        } catch (error) {
            console.error("Error:", error)
            throw err
        }
    })()
 */