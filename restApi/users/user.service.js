import pool from "../config/database.js";

const services = {
    create: (data, callBack) => {
        pool.query(`insert into registration(firstName, lastName, gender, email, password, phoneNumber)
             values(?, ?, ?, ?, ?, ?)`, [data.firstName, data.lastName, data.gender, data.email, data.password, data.number],
            (error, result, fields) => {
                if (error) { return callBack(error); }
                else { return callBack(null, result) }
            })
    },
    getUser: (callBack)=>{
        pool.query(`select * from registration`,[], (err, data, field)=>{
            if(err){  return callBack(err);  }
            else {  console.log("fiels", field);
                return callBack(null, data)}
        } );
        
    },
    getUserById: (id, callBack)=>{
        pool.query(`select * from registration where id = ${id}`,[], (err, data, field)=>{
            if(err){ return callBack(err);}
            else{   console.log("field", field)};
                    return callBack(null, data);
        } )
    },
    updateUser: (data, callBack)=>{
        pool.query(`update registration set firstName = ?, lastName= ?, email=? where id =?`, 
                    [data.firstName, data.lastName, data.email, data.id], (err, result, field)=>{
                        if(err){ console.log("err: ", err); return callBack(err);}
                        else{return callBack(null, result); }
                    })
    },
    deleteUser: (data, callBack)=>{
        pool.query(`delete from registration where id =?`, 
                    [data.id], (err, result, field)=>{
                        if(err){ console.log("err: ", err); return callBack(err);}
                        else{return callBack(null, result); }
                    })
    },
    getUserByEmail: (data, callBack)=>{
        console.log("getUserByEmail", data);
        pool.query(`select * from registration where email=?`, [data], (err, result, field)=>{
            if(err){ console.log("Err:", err); return callBack(err); }
            else{ return callBack(null, result[0]); }
        })
    }
}
export default services;