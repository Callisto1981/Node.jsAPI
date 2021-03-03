const Joi = require('joi');
const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'Italian'},
    {id: 2, name: 'German'},
    {id: 3, name: 'Arabic'},
]

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required() // This is a requirement of atleast 3 characters for the name.
    };
    return Joi.validate(course, schema);
}

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

app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //Check to see if there is a course.
    const course = course.find(course => course.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    //If course does not exist.
    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Update Course and return it to the client
    course.name = req.body.name;
    res.send(course);
});

app.delete();