
//const er en konstant variabel der ikke kan ændres.
const express = require('express');
//lav nu 1 indstands (1 element)
const app = express();

//Vi beder vores app om at kører funktionen get
//udover at lytte på port 3000, skal der stå i adresse baren : localhost:3000/api/test
// så er det denne route vi rammer
app.get('/api/getit', (req, res) => {
    res.json({ navn: "Lotte", alder: "24"  });
 });

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
