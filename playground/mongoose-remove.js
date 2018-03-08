const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');



// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5aa0297c2dcb1a2b87ede7ff'}).then((todo) => {

// });

Todo.findByIdAndRemove('5aa0297c2dcb1a2b87ede7ff').then((todo) => {
    console.log(todo);
});