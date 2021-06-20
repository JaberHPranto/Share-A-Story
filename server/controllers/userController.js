import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


export const signin = async (req,res) => {
    // need data from frontend
    const { email, password } = req.body;

    try {
         // check for whether the user exist
        const existingUser = await User.findOne({ email })
        if (!existingUser) return res.status(404).json({ message: "User not found" })
        
        // if user exist, check for password
        const isValidPassword = await bcrypt.compare(password, existingUser.password)
        if (!isValidPassword) return res.status(404).json({ message: "Invalid Credentials" })
        
        // if both user and password is valid => generate a jwt
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id },
            process.env.SECRET,
            {expiresIn:'1h'}
        )

        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
   
    

}
export const signup = async (req,res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        // check whether this email already exist or not
        const existingUser = await User.findOne({ email })
        if (existingUser) res.status(404).json({ message: "User already exist" })
        
        // check the password
        if (password !== confirmPassword) return res.status(404).json({ message: "Passwords don't match" })
        
        // if password is valid hash it
        const hashedPassword = await bcrypt.hash(password, 12)
        
        // Now create the user
        const result = await User.create({ email: email, password: hashedPassword, name: `${firstName} ${lastName}` })
        
        // generate the token
        const token = jwt.sign({ email: result.email, id: result._id },
            process.env.SECRET,
            { expiresIn: '1h' })
        
        res.status(201).json({result,token})
            
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
    }

}