import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './config/db.js';
import router from './routes/postRoutes.js';

app.use(express.json());
//global error handler middleware
app.use((err, req, res, mext)=>{
    console.log("stack", err.stack);
    console.log("name", err.name);
    console.log("code", err.code);
    res.status(500).json({ message: "Something wnt Wrong"});
})

// const getUsers = async ()=>{
//     try {
//         const [rows, fields] = await db.execute('SELECT * from posts');
//         console.log("res," ,rows, fields );
//     } catch (error) {
//         console.log("error: ", error);
//     }
//     finally{
//         db.release();
//     }
// }
// getUsers();

app.use('/', router);
app.listen(port, ()=>{ console.log("app is listenig at port", port)});

