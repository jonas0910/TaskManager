import express  from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js"
import taskRoutes from './routes/task.routes.js'
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();

app.use(cors({
    origin:["https://task-manager-front-611p.onrender.com","http://localhost:5173"],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
    accessControlAllowCredentials:true,
    credentials: 'include',
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",taskRoutes);

export default app;