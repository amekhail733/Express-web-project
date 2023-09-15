// Imports
const express = require('express');
const app = express()
const port = 3200;

// static files
app.use(express.static('./public/images'))

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('home', { text: 'This is EJS'})
})

app.get('/', (req, res) =>{
    res.render('team', { text: 'Team Page'})
})

app.get('/', (req, res) =>{
    res.render('plan', { text: 'Plan Page'})
})

app.get('/', (req, res) =>{
    res.render('contact', { text: 'Contact Page'})
})


app.listen(port, ()=>{
    console.log('Server/App is running at', port);
});