import mongoose from 'mongoose';

console.log(process.env.MONGO_CONNECTION)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;