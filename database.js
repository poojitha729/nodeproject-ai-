const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const MongoUri=process.env.MONGOURI

async function connectDB() {
    try {
        await mongoose.connect(`${MongoUri}`, {});
        console.log(`MongoDb connected successfully`);
    } catch (error) {
        console.log(`error connectiong with database ${error}`);
    }
}
 
module.exports={
    connectDB
}