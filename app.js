import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import hbs from 'hbs';
import'dotenv/config';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const port = process.env.PORT



const app = express();

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home',{
        "nombre": "Miller Pro",
        "titulo": "HAciendo una pagina en node"
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        "nombre": "Miller Pro",
        "titulo": "HAciendo una pagina en node"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        "nombre": "Miller Pro",
        "titulo": "HAciendo una pagina en node"
    });
})

app.listen(port)
console.log("Now running in "+ port)