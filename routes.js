module.exports = (app)=> {

//Vi beder vores app om at kører funktionen get
//udover at lytte på port 3000, skal der stå i adresse baren : localhost:3000/api/test
// så er det denne route vi rammer
app.get('/api/getit', (req, res) => {
    res.json({ navn: "Lotte", efternavn: "Kildebro", alder: "24"  });
 });
//profile route
 app.get('/api/profile', (req, res)=>{
    res.json({ navn: 'pikachu', art: 'pokemon', level: '4'  });
 });

//kunster router
app.get('/api/kunstner', (req, res)=>{
    res.json({ navn: 'John lennon', født: '1940', band: 'beatles'  });
 });

 //test router
 app.get('/api/test', (req, res)=>{
    res.json({ tekst: 'hej verden'  });
 });
}
