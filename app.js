
const express = require('express');//Importa el módulo express
const bodyParser = require('body-parser'); //Importa el módulo body-parse
const cors = require('cors');



//Inicializa express
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.post('/test', (req,res)=>{
    console.log('////////////////////////////////////////////////////')
    console.log('Request Headers:');
    console.log(req.headers);
    console.log('Request Body:');
    console.log(req.body);
    console.log('');
    res.status(200).json(req.body);
});

app.get('/test', (req,res)=>{
    console.log('Request received');
    res.send('Hello bitch!');
});

//Crea el servidor por el puerto port
const port =  process.env.PORT || 3000;
app.listen(port, () => {
    console.log('*** Server is up and runnign on port number ' + port + '\n');
});