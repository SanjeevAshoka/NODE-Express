const express = require('express');
const path = require('path');
const app = express();
const data = require('./data')

const logger = (req, res, next)=>{
    console.log("url = ", req.url, "param = ", req.params, "query = ", req.query);
    next();
}
// app.use(express.static('browser'));
app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1><br><a href="/api/employees">Employees</a>');
})
app.get('/about', (req, res)=>{  
    res.status(200).send("About Page");
})
app.use(logger);
app.get('/api/employees', (req, res)=>{
    res.json(data);
})
app.get('/api/employees/:id', (req, res)=>{
    const result = data.employee.find((item)=> item.id == req.params.id) || {message: "No Product with that id"};
    res.json(result);
})




app.all('*', (req, res)=>{
    console.log("url = ",req.url);
    res.status(404).send("All url ");
})

app.listen(3000, ()=>{ 
        console.log(`App is listening at http://localhost:3000`);
})

// get post put delete patch use listen