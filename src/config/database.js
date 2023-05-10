import mongoose from "mongoose"

export const connect = async() =>{

    //Use 127.0.0.1 instead of localhost for latest versions of mongodb

    await mongoose.connect('mongodb://127.0.0.1/twitter_dev')
}

