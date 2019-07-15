var express = require ('express');
var bodyParser = require ('body-parser');

var {mangoose}= require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

//app.use(bodyParser.json());
app.post('/todos',(req , res)=>{
    console.log(req.body);
    var todo = new Todo({text : req.body.text});
    todo.save().then((doc)=> {res.send(doc)},(e)=> res.send('Error has been occurred'));
});

app.get('/todos',(req ,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e);})
});



app.listen(3000 , ()=>{
    console.log('start on port 3000')
});

module.exports={app};






























/*

var newTodo = new Todo ({text: 'studying'});

newTodo.save().then((doc)=> {console.log('saved todo ', doc)},(e)=> console.log('Error has been occurred'));
//email - require - trime - stein - type - min lenght

var newUser = new user ({email : 'amir@gmail.com'});

newUser.save().then((doc)=>{console.log('Email  is : ',doc)},(e)=>{console.log('Error has been occurred')});*/