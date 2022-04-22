const express = require('express');
const app = express();
var cons = require('consolidate');
var path = require('path')


app.use(express.urlencoded({ extended: true }));

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/ex1', (req, res) => {
    res.render('ex1')
})

app.post("/ex1", (req, res) => {
    const name = request.body.name;
    const email = request.body.email;
    res.send(`${name},Thank you for your order. We will keep you posted on delivery status at ${email}`);
});

app.listen(3000, () =>{
    console.log("SERVING YOUR APP!")
    console.log(__dirname)
})

