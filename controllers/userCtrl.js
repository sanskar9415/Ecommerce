const User = require("../models/userModel");

const createUser = async (req,res) => {
    try {
        const email = req.body.email;
        const findUser = await User.findOne({ email : email });
        if(!findUser){
            const newUser = await User.create(req.body);
            res.json(newUser);
        }else {
            res.json({
                msg: "User already exist",
                success: false
            });
        }
    } catch (error) {
        console.log("error in userctrl");
    }
}

module.exports = { createUser };