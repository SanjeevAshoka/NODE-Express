import mongoose from "mongoose";

const connectDB =async (connString)=>{
try {
    await mongoose.connect(connString, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connected success")
} catch (error) {
    console.log("err", error);
}
}
export default connectDB;