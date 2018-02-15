
//const er en konstant variabel der ikke kan ændres.
const express = require('express');
//lav nu 1 indstands (1 element)
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes.js')(app);


//Beder server om at bruge 'express.static' , det skal være den
//sidste ting som serveren er sat op til, er at servere statisk fil
// efter 'routen' og før 'listen'..
 app.use(express.static('public'));

//når man starter appen kører den port 3000 
app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
//dette er for at vise om serveren virker..
    console.log('App is listening on http://localhost:3000');
 });


