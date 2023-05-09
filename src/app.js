const path    = require('path');
const express = require('express');
const hbs     = require('express-handlebars');
const routes  = require('./routes/routes.js');
const app     = express();
const port    = 3000;

app.engine('hbs', hbs.engine({
    extname: 'hbs', 
    defaultLayout: 'main',
    layoutsDir: __dirname +'/views/layout'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use('/', routes);

app.listen(port,()=>{
    console.log("Rodando na porta "+port);
});