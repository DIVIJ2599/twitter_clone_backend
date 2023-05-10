import { toggleLike } from "../service/like-service.js";

export const createLike = async(req,res) => {
    try{
        const response = await toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Successfuly toggled like',
            err: {}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: err
        })
    }
}