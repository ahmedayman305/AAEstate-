import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: 'USER CREATED' }); // Respond with JSON object
    } catch (error) {
        next(error); // Pass error to error handling middleware
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User Not Found!'));
        }

        // Compare passwords
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Wrong credentials'));
        }

        // Generate JWT token
        const token = jwt.sign({ id: validUser._id, name: 'userToken' }, process.env.JWT_SECRET);

        // Exclude sensitive fields from response
        const { password: pass, ...rest } = validUser._doc;

        // Send user data and token in the response body
        res.status(200).json({ user: rest, token });
    } catch (error) {
        next(error);
    }
    console.log(res)
};
