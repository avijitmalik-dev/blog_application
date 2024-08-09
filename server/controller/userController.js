import bcrypt from 'bcryptjs';
import jwt  from'jsonwebtoken';
import User from '../models/userModel.js';
/**
 * new login system
 * @param {*} req 
 * @param {*} res 
 */
export const newloginSystem = async(req, res)=>{
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}
/*
 *new register systm 
 * @param {*} req 
 * @param {*} res 
 */
export const newRegisterSystem = async(req, res)=>{
    const { username, email, password } = req.body;
    try {
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).send({ message: 'User created successfully',  data:user, success:true});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}









