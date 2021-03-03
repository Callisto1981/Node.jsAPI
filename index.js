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

app.get('/api/courses', (req, res) => {
    res.send([courses]);
});

app.get('/api/course/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.post();

app.put();

app.delete();