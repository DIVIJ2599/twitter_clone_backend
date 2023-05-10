import Like from '../models/like.js';
import Tweet from '../models/tweet.js';

export const toggleLike = async(modelId, modelType, userId) => {
    try{
        if(modelType === "Tweet"){
        var likeable = await Tweet.findById(modelId).populate({path:'likes'}).exec();
        console.log(likeable)
    } else if(modelType = "Comment") {
        var likeable = await Comment.findById(modelId).populate({path: 'likes'}).exec();
    } else {
        throw new Error("Unknown model type")
    }

    const exists = await Like.findOne({
        user: userId,
        onModel: modelType,
        likeable: modelId
    });

    if(exists){
        likeable.likes.pull(exists.id);
        await likeable.save();
        await exists.deleteOne();
        var isAdded = false;
    } else{
        const newLike = await Like.create({
            user: userId,
            onModel: modelType,
            likeable: modelId
        })

        likeable.likes.push(newLike);
        await likeable.save();
        var isAdded = true;
    }
    return isAdded;
}catch(err){
    console.log(err);
}
}