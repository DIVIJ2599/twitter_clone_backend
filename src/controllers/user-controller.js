import { createUser, getUserByEmail } from "../service/user-service.js";

export const signup = async(req,res) =>{
    try{
        const response = await createUser(req.body);
        return res.status(200).json({
            success: true,
            message: 'Signup successfull',
            data: response,
            err: {}
        })
    }catch(err){
        console.log(`Error in user controller`);
        return res.status(500).json({
            success: false,
            message: 'Unable to signup',
            data: {},
            err: err
        })
    }
}

export const login = async(req,res) => {
    try{
        const user = await getUserByEmail(req.body.email);
        if(!user){
            return res.status(401).json({
                success: false,
                message: 'No user found',
            })
        }
        if(!user.comparePassword(req.body.password)){
            return res.status(401).json({
                success: false,
                message: 'Incorrect password',
            })
        }
        
        const token = user.generateJWT();
        
        return res.status(200).json({
            success: true,
            message: 'Login successfull',
            data: token,
            err: {}
        })
    } catch(err){
        console.log(`Error in user controller`);
        return res.status(500).json({
            success: false,
            message: 'Unable to login',
            data: {},
            err: err
        })
    }
}