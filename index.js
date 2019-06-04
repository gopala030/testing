const express = require('express');
const app = express();

const port = 8080

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}));


/*app.use(bodyParser.json());

app.get('/random', function(req, res){
	res.send(Math.floor(Math.random()*10000) + " ");
});

app.post('/sayhello', function(req,res){
	res.send("Hello " + req.body.name);
});*/

app.post("/submit", function(req, res){
	res.json({ 
		name: req.body.username,
	 	age: req.body.age,
	 	departmnet: req.body.department
	 });
});

app.listen(port, () => console.log('Listening on port 8080'));