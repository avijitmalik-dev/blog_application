import express from 'express'
const app = express();
const port = 8000
import createBlogPost from './routes/blogRouter.js';
import userRouter from './routes/userRouter.js'
import connectDb from './dbConfig/dbConfig.js';
import cors from "cors";
import  dotenv  from 'dotenv';
import cookieParser from 'cookie-parser'; 

const url = "http://localhost/8000"
const corsOptions = { 
    origin: url, 
    credentials: true,  
}
connectDb()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions))



app.use("/api", createBlogPost);
app.use("/auth", userRouter);

app.listen(port,() =>{
    console.log(`Server Is Running on port  Number ${port}`);
})







