import express from 'express'
import router from './users/user.router.js';

const app = express();

const port = process.env.PORT || 3000;
// app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router); 

app.listen(port, ()=>{ console.log('app is listening')})