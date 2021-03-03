const Joi = require('joi');
const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'Italian'},
    {id: 1, name: 'German'},
    {id: 1, name: 'Arabic'},
]
app
//Invironment variable
//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));

app.get();

app.get();

app.post();

app.put();

app.delete();