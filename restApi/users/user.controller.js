import services from "./user.service.js";
import bcrypt, { compareSync } from 'bcrypt';
import pkg from 'jsonwebtoken';

const Controllers = {
    createUser: (req, res)=>{   
        const body = req.body;
        const saltRounds =10;
        const salt = bcrypt.genSaltSync(saltRounds);
         body.password = bcrypt.hashSync(body.password, salt);
         console.log("req=", body);
         services.create(body, (err=null, result={})=>{
            if(err){
                console.log("err 1: ", err);
                return res.status(500).json({ success: false, message: "Something went wrong"})
            }
            return res.status(200).json({success: true, data: result})

         })
    },
    getAllUser: (req, res)=>{
        services.getUser((err=null, result={})=>{
            if(err){ return res.status(500).json({success:false, message: "Fetching of data failed"})}
            else{ console.log("data: ", result); res.status(200).json({success: true, message: result})
            }
        })
    },
    getUserBYId: (req, res)=>{
        console.log("controller", req.params.id)
        services.getUserById(req.params.id, (err, result={})=>{
            console.log("res=", result);
            if(err){ return res.status(500).json({success: false,message: "Something went wrong"})}
            else{ return res.json({success: true, message :result})}
        })
    },
    updateUser: (req, res)=>{
        console.log("update");
        services.updateUser(req.body, (err= null, result={})=>{
            if(err){ res.status(500).json({success: false, message: "UPdate user failed"})}
            else{ console.log("res= ", result); res.status(200).json({success: true, message: result})}
        })
    },
    deleteUser: (req, res)=>{
        console.log("dete user");
        services.deleteUser(req.body, (err= null, result= {})=>{
            if(err){ res.status(500).json({success: false, message: "Delete user failed"})}
            else{ console.log("res= ", result); res.status(200).json({success: true, message: result})}
        })
    },
    login: (req, res)=>{
        const body = req.body;
        services.getUserByEmail(body.email, (err= null, result={})=>{
            if(err){ console.log("err: ", err);}
            else if(!result){    return res.json({success: false, message: "Records Not Found"}); }
            else{ 
                console.log("res==", result);
                const passComp = compareSync(body.password, result.password);
                console.log("passcomp=", passComp);
                if(passComp){
                    // passComp.password  = undefined;
                    const  jsontoken = pkg.sign({result: result}, "secretKey", {expiresIn: "1h"} );
                    return res.json({success: true, message: "Login Successfully", token:  jsontoken})
                }
                else{
                    res.json({success: false, message: "Invalid User Credentials"});
                }
            }
        })
    }

}

export default Controllers;

