const {ObjectID}= require( 'mongodb');

const {moongoose}= require ('./../server/db/mongoose');
const {Todo} =require ('./../server/models/todo');
//const {Todo} =require ('./../server/models/todo')
var id = '5d2c0e5b22852414d4bfcb6e11';

if(! ObjectID.isValid(id)){
    console.log('ID not valid');
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo*', todo);
});
Todo.findById(id).then((todo)=>{
    if (!todo){return console.log('HAHAHAHAHA!')}
    console.log('Todo By Id', todo);
}).catch((e)=>console.log(' :*'));