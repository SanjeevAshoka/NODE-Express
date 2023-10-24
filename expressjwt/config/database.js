import mongoose from "mongoose";

const connString = "mongodb+srv://sabzibhazi1976:Z0yEitPmUh7C4cZd@mongoose1.tnnoksh.mongodb.net/expressdata?retryWrites=true&w=majority"

const ConnectDb = async ()=>{
    try {
       await  mongoose.connect(connString, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connected Successfully")
    } catch (error) {
        console.log("Err:", error)
    }
}
export default ConnectDb;