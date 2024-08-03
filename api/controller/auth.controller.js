import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const validUser = await User.findOne({
            $or: [{ email }, { username }],
        });

        if (validUser) {
            return next(errorHandler(401, "User already exists in Database"));
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({
            message: "USER CREATED",
            newUser,
            token: generateToken(newUser._id),
        });
    } catch (error) {
        next(error); // Pass error to error handling middleware
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });

        if (!validUser) return next(errorHandler(404, "User Not Found!"));

        const validPassword = bcryptjs.compareSync(
            password,
            validUser.password
        );

        if (!validPassword) return next(errorHandler(401, "Wrong credentials"));

        const { password: pass, ...rest } = validUser._doc;

        res.json({
            user: rest,
            token: generateToken(validUser._id),
        });
    } catch (error) {
        next(error);
    }
};

const generateToken = (id) => {
    return jwt.sign(
        { id, name: "userToken" },
        process.env.JWT_SECRET,
        { expiresIn: "1h" } // Optional: set token expiration
    );
};
