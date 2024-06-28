import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js'; // Corrected path
import authRouter from './routes/auth.route.js';


// connect mongo db 
dotenv.config();
connectDB();

// init app
const app = express();
app.use(cors())
app.use(express.json())

// use route
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter) // Mount userRouter under '/users' path

// run server
app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

// applay middleware
app.use((err, req, res, next) => {
    const statuesCode = err.statuesCode || 500
    const message = err.message || 'INTERNAL SERVER ERROR'
    res.status(statuesCode).json({
        success: false,
        message,
        statuesCode
    })
})