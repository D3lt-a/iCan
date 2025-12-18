const User = require('../models/userModel');

const createUser = async (uname, uemail, upasskey, role, goal) => {
    try {
        const newUser= new User({
            username: uname,
            useremail: String(uemail),
            userpasskey: upasskey,
            role: role,
            goal: goal
        })
        await newUser.save();
        return { success: true, message: "User created successfully" };
    } catch (error) {
        console.error("⛔ Error creating user", error);
        return { success: false, message: "Error creating user" };
    }
}

const loginUser = async (uemail, upasskey) => {
    const user = await getUserByEmail(uemail);
    if (!user) {
        console.error("⛔ User not found");
        return { success: false, message: "User not found" };
    }
    if (user.userpasskey !== upasskey) {
        console.error("⛔ Incorrect password");
        return { success: false, message: "Incorrect password" };
    }
}

module.exports = {
    createUser,
    loginUser
};