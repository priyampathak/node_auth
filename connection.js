const mongoose = require('mongoose')

async function connectToDatabase(){
    try{
        const uri = process.env.MONGODB_URI;
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;

        await mongoose.connect(`mongodb+srv://${username}:${password}${uri}`, { useNewURLParser: true,
        useUnifiedTopology: true});
        console.log("MongoDB connection successfull")
    }catch(error){
        console.log("MongoDB connect error occured", error)
        process.exit(1)
    }
}

module.exports = connectToDatabase;