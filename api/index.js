import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js'; // Corrected path
import authRouter from './routes/auth.route.js';

dotenv.config();
connectDB();



const app = express();

app.use(express.json())


app.use('/api/users', userRouter);
app.use('/api/auth', authRouter) // Mount userRouter under '/users' path

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

app.use((err, req, res, next) => {
    const statuesCode = err.statuesCode || 500
    const message = err.message || 'INTERNAL SERVER ERROR'
    res.status(statuesCode).json({
        success: false,
        message,
        statuesCode
    })
})