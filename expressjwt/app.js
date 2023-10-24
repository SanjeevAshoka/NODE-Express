import { config } from 'dotenv';
config();
import express from 'express';
import cors from 'cors';
import ConnectDb from './config/database.js';
import router from './routes/userRoute.js';
const port= process.env.PORT || 3000;
const app = express();
ConnectDb();
app.use(cors());
app.use(express.json());

// Loading routes
app.use('/', router)

app.listen(4000, ()=>{ console.log("App is listening at port: ", port); })
