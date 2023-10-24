import {verify} from "jsonwebtoken";

const Validation = {
    checkToken: (req, res, next)=>{
        if(token){
            let tokenLocal = token.slice(7);
            verify(tokenLocal, "secretKey", (err, decodedObject)=>{
                console.log("decoeded",  decodedObject);
                if(err){ res.json({success: false, message: "Invalid Token"});   }
                else{
                    next();
                }
                
            })
        }
        else{
            res.json({success: false, message: "Access denied"})
        }
    }
}

export default Validation;