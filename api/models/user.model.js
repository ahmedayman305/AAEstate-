import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        Type: String,
        required: true,
        unique: true
    },
    email: {
        Type: String,
        required: true,
        unique: true
    },
    username: {
        Type: String,
        required: true,
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User