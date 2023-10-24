import mongoose from 'mongoose';
const connString = "mongodb+srv://sabzibhazi1976:Z0yEitPmUh7C4cZd@mongoose1.tnnoksh.mongodb.net/expressdata?retryWrites=true&w=majority";
const connectDb = async ()=>{
    try {
        await   mongoose.connect(connString, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected");
    } catch (error) {
        console.log("error: ", error);
    } 

}
export default connectDb;