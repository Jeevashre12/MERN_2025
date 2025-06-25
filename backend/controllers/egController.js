const user = require('../models/userModel');


exports.signupRoute = async (req, res) => {
    try {
        const userData = await user.find();
        res.status(200).json({ data: userData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};
exports.getRouteById=async(req,res)=>{
    const userData=await user.findById(req.params.id)
    
    res.status(201).json({userData})
}
exports.loginRoute = async (req, res) => {
    const { username, password } = req.body;
    try {
        const exist = await user.findOne({ username });
        if (exist) return res.status(409).json({ message: 'User already exists' });

        const newUser = new user({ username, password });
        await newUser.save();
        res.status(201).json({ user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
};


exports.putRoute = async (req, res) => {
    try {
        const update = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!update) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ updatedUser: update });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
};


exports.deleteRoute = async (req, res) => {
    
        const deleteData = await user.findByIdAndDelete(req.params.id);
        if (!deleteData) return res.status(404).json({ message: 'User not exist' });
    res.status(201).json({message:"Deleted successfully"})
        
};
