const  {ObjectID}= require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =require ('./../server/models/todo');
const {User} =require ('./../server/models/user');

//Todo.remove({}).then((result)=>{
  //  console.log(result);
//});

//Todo.findOneAndRemove()
Todo.findByIdAndRemove('5d2d5d7b2710d589fa9dcdaf').then((todo)=>{
    console.log(todo.text);
});