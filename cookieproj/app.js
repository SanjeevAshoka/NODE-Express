import env from'dotenv';
env.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import router from './routes/web.js';
import connectDb from './db/connectDb.js';
connectDb();
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.listen(port, ()=>{ console.log(" app  is listening ", port)})

// key        emailid - > session data in db