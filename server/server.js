var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});





// var newUser = new User({
//     //email: ' j.m.osterman@gmail.com  '
// });

// newUser.save().then((result) => {
//     console.log(JSON.stringify(result, undefined, 2));
// }, (err) => {
//     console.log('Unable to save user', err);
// });
// set email property, require it, trim it, set type = string, minLength of 1