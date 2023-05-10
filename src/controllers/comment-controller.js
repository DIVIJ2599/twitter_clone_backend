import { addComment } from "../service/comment-service.js";

export const createComment = async(req,res) => {
    try{
        const response = await addComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        console.log(response)
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Successfuly created a comment',
            err: {}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Unable to create a comment',
            err: err
        })
    }
}

