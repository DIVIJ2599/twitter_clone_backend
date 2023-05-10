import Hashtag from "../models/hashtags.js";
import Tweet from "../models/tweet.js";

export const createTweet = async(data) => {
    try{
        let content = data.content;
    
        let tags = content.match(/#[A-Za-z0-9_]+/g); 
    
        if(tags){    
            tags = tags.map((tag)=> tag.substring(1));
            console.log(tags);        
            //Creating hashtags
            let oldTags = await Hashtag.find(
                {title: {$in: tags}}
            )

            //Checks if tags are present already or not
            let tagTitles = [];
            tagTitles = oldTags.map(tag=>tag.title)
            let newTags = tags.filter(tag=> !tagTitles.includes(tag));

            //Map over all new Tags and create new tag object
            newTags = newTags.map((tag) => {
                return { title: tag, tweets: [tweet.id] };
            });

            //Push new tweets into the existing tags
            oldTags.forEach((tag)=>{
                tag.tweets.push(tweet.id);
                tag.save();
            })

            //Bulk insert new tags
            const response = await Hashtag.insertMany(newTags);
            console.log(`response : ${response}`);
        }
        const tweet = await Tweet.create(data);
        return tweet;
    }catch(err){
        console.log(err);
        throw{err};
    }
}

const updateTweet = async(id,data) => {
    try{

    }catch(err){
        console.log(err);
        throw{err};
    }
}

const deleteTweet = async(id) => {
    try{
        await Tweet.deleteOne({
            id
        })
    }catch(err){
        console.log(err);
        throw{err};
    }
}

export const getWithComments = async (id) => {
    try{
        const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();
        return tweet;
    }catch(err){
        console.log(err);
        throw{err};
    }
}

export const getTweet = async(id) => {
    try{
        const tweet = await Tweet.findById(id);
        return tweet;
    }catch(err){
        console.log(err);
        throw{err};
    }
}

const getAll = async (offset,limit) =>{
    try{
        const tweet = await Tweet.find().skip(offset).limit(limit);
        return tweet;
    }catch(err){
        console.log(err);
        throw{err};
    }
}


/*


*/