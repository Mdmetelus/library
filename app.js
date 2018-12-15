var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = required('path');

var app = express();



app.use(morgan('combined'));
// app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname,'/public')));
// app.get('/', (req, res) => {
//     res.send('Hello from my library app');
// });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index/html'));
});

app.listen(3000, () => {
    console.log(`Listen on port ${chalk.green('3000')}`);
});