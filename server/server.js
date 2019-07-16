var express = require ('express');
var bodyParser = require ('body-parser');

const {ObjectID}= require( 'mongodb');

var {mangoose}= require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000 ;
app.use(bodyParser.json());
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

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(! ObjectID.isValid(id)){
        res.status(404).send();
    }else{
        Todo.findById(id).then((todo)=>{
            if (!todo){res.status(404).send();}
            else {res.status(200).send( todo);}
        }).catch((e)=>res.status(400).send());
    }

   // res.send(req.params);
});
app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(! ObjectID.isValid(id)){
        res.status(404).send();
    }else{
        Todo.findByIdAndRemove(id).then((todo)=>{
            if (!todo){res.status(404).send();}
            else {res.status(200).send( todo);}
        }).catch((e)=>res.status(400).send());
    }
});



app.listen(port , ()=>{
    console.log('start on port ', port)
});

module.exports={app};






























/*

var newTodo = new Todo ({text: 'studying'});

newTodo.save().then((doc)=> {console.log('saved todo ', doc)},(e)=> console.log('Error has been occurred'));
//email - require - trime - stein - type - min lenght

var newUser = new user ({email : 'amir@gmail.com'});

newUser.save().then((doc)=>{console.log('Email  is : ',doc)},(e)=>{console.log('Error has been occurred')});*/