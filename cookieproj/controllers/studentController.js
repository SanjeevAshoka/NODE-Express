import UserModel from "../models/user.js";
class UserController{
    static home = (req, res)=>{
        res.render('index', {}, (err, html)=>{
            if(err){
                console.log("err: ", err);
                res.send("Something went wrong");
            }
            else{  console.log("success");
                res.send(html);  }
            
        })
    }
    static createUserDoc =async (req, res)=>{
        try {
            console.log("bdy", req.body);
            // console.log("res", JSON.stringify(req));
            const {name, email, password, } = req.body;
            const docUser = new UserModel({ name, email, password});
           await  docUser.save();
           res.redirect('/login');
        } catch (error) {
            console.log("Err:", error)
        }
    }
    static registration = (req, res)=>{
        res.render('registration', {}, (err, html)=>{
            if(err){
                console.log("err: ", err);
                res.send("Something went wrong");
            }
            else{  console.log("success");
                res.send(html);  }
            
        })
    }
    static login = (req, res)=>{
        if(req?.verifyRes?.isValid){
            console.log("valid successful")
        }
 
            res.render('login', {}, (err, html)=>{
                if(err){
                    console.log("err: ", err);
                    res.send("Something went wrong");
                }
                else{  console.log("success");
                    res.send(html);  }       
            })
        

    }
    static verify = async (req, res, next)=>{
        let isValid = false;
        try {
            console.log("req=", req.body);
            const {email, password} = req.body;
            const dbUser = await UserModel.findOne({email});
            console.log("res=", dbUser);
            if(dbUser.password === password){ isValid = true; }
        } catch (error) {
            console.log("err=", error)
        }
        const verifyRes = { isValid }; req.verifyResult = verifyRes;
        next();
    }
}
export default UserController