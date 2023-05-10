import User from "../models/user.js";

export const createUser = async(data) => {
    try{
        const user = await User.create(data);
        return user;
    }catch(err){
        console.log(`Error in service layer :`,err);
    }
}

export const getUserByEmail = async(email) => {
    try{
        const user = await User.findOne({email});
        return user;
    }catch(err){
        console.log(`Error in service layer :`,err);
    }
}