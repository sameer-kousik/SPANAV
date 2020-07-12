// var express = require('express')
// var mysql = require('mysql')
// var bodyParser = require('body-parser')

var express = require('express')
var app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"/public/SPANAV/index.html"))
})


app.get('/login',function(req,res){
        res.send("login")
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// var app = express()
// app.use(express.static('public'))



// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"/public/SPANAV/index.html"));
// })



// app.listen(8000,function(req,res){
//     console.log("Development Server up and running");
// })