import UserModel from "../models/userModel.js"
import {genSaltSync, hashSync, compareSync} from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserController = {
    userRegistration: async (req, res) => {
        const { name, email, password, tc, cPassword } = req.body;
        const userExist = await UserModel.findOne({ email: email });
        if (userExist) {  res.status(200).json({ status: "failed", message: "User AAlready Exist" }) }
        else if (email && password && tc && cPassword) { 
            if (password == cPassword) { 
                const hashPass = hashSync(password ,genSaltSync(8))
                const doc = new UserModel({ name, email, password: hashPass, tc })
                try {
                    const resDoc = await doc.save();
                    // Generating JWT Token
                    const token = jwt.sign({userId:resDoc._id }, "secret_key", {expiresIn: '3d' })
                    res.status(200).json({ status: "Success", message: "User CReated" , token: token})
                } catch (error) {
                    res.json({ status: "failed", message: "Passwords doesn't Match" })
                }
            }
            else {
                res.status(200).json({status: "failed", message:"Both Passwords didn't match" });
            }
        }
        else {console.log("kkkk tow"); res.status(200).json({ status: "failed", message: "Provide All Details" }); }
    },
    userLogin: async (req, res)=>{
        try {
            const {email, password} = req.body;
            console.log("b- ", req.body)
            if(email && password){
                const userDoc =await UserModel.findOne({email: email}) || {};
                console.log("f-f", userDoc);
                if(userDoc){
                    const matchCheck  = compareSync(password,userDoc.password);
                    console.log("matchCheck", matchCheck);
                    if(matchCheck){
                        const token = jwt.sign({userId:userDoc._id }, "secret_key", {expiresIn: '3d' })
                         res.status(200).json({status: "Success", messsage: "user Logged in", token:token} )}
                    else{
                        res.staus(200).json({status: "Failed", messsage: "Password is Incorrect"} )
                    }
                }
                else{
                    console.log("User Doesn't Exist");
                    res.status(200).json({status: "Failed", message: "User Doesn't Exist, Create Account"})
                }
            }
            else{
                res.status(200).json({staus: "failed", message: "Both Fields Mandatory"})
            }
        } catch (error) {
            console.log("Err: ", error);
            res.status(200).json({staus: "failed", message: "Email or Password is Incorrect"})
        }

    }
}
export default UserController;