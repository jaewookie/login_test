var express = require('express')
var app = express();
var path = require('path')
var ejs = require('ejs')
require('dotenv').config()
var static = require('serve-static')
var bodyParser = require('body-parser')


app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(static(path.join(__dirname,'public')))

// body-parser을 이용해 application/x-www-form-urlencoded parsing
app.use(bodyParser.urlencoded({extends:false}))
app.use((req,res)=>{
    var paramId = req.body.id || req.query.id
    var paramPwn = req.body.pwn || req.query.pwn
    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'})
    res.write('<h1>Responds</h1>');
    res.write('<div><p> pram Id :'+ paramId+'</p></div>')
    res.write('<div><p> pram PassWord :'+ paramPwn+'</p></div>')
    res.end();
})

var port = process.env.PORT||3000

app.listen(port,()=>{
    console.log(`Server is starting at http://localhost:${port}`)
})