
import express from 'express';
import connectDB from './db/connect.js';
import { join } from 'path';
import router from './routes/web.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(join(process.cwd(), 'public')));
await connectDB("mongodb+srv://sabzibhazi1976:Z0yEitPmUh7C4cZd@mongoose1.tnnoksh.mongodb.net/expressdata?retryWrites=true&w=majority");
//setting view engine
app.set('view engine', 'ejs'); 

app.use('/', router);

app.listen(port, ()=>{ console.log("listening ")} )


// Z0yEitPmUh7C4cZd