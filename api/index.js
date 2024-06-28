import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/user.route.js'; // Corrected path

dotenv.config();
connectDB();

const app = express();

app.use('/api/users', userRouter); // Mount userRouter under '/users' path

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
