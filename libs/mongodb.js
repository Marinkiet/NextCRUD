
import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to crud mongodb")
    }catch(error){
        console.log(Error+"Error connecting to crud mongodb")
    }
}
export default connectMongoDB;