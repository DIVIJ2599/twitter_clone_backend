import Comment from "../models/comment.js";
import Tweet from "../models/tweet.js";

export const addComment = async(modelId,modelType,userId,content) => {
try{
    console.log("modelId:", modelId)
    console.log("modelType:", modelType)
    console.log("userId:", userId)
    console.log("content:", content)
    if(modelType === "Tweet"){
        var commentable = await Tweet.findById(modelId)
        console.log(commentable)
    } else if(modelType == "Comment"){
        var commentable = await Comment.findById(modelId)
    } else {
        throw new Error("Unknown Model")
    } 
    const comment = await Comment.create({
        content: content,
        userId: userId,
        onModel: modelType,
        commentable: modelId,
        comments: []
    })

    if(commentable && commentable.comments){
    commentable.comments.push(comment);
    await commentable.save();
    }

    await comment.save();

    console.log("comment",comment)
    return comment;
} catch(err){
        console.log(err);
    }
}