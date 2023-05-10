import { createTweet, getTweet } from "../service/tweet-service.js";

import upload from "../config/s3-config.js";

const singleUploader = upload.single('image');

export const create = async(req,res) => {
    try{
        singleUploader(req,res,function(err){
            if(err){
                return res.status(500).json({error: err})
            }
            
        })
        const response = await createTweet(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
            err: {}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Unable to create a new tweet',
            data: {},
            err: err
        })
    }
}

export const findTweet = async(req,res) => {
    try{
        const response = await getTweet(req.params.id);
        console.log(response)
        return res.status(201).json({
            success: true,
            message: 'Successfully found a new tweet',
            data: response,
            err: {}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Unable to find tweet',
            data: {},
            err: err
        })
    }
}