var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(express.static('pug'));
app.set('views', './pug');
app.set('view engine', 'pug')

app.get('/test',function(req,res){
    res.render('mypage')
})

app.listen(8080,()=>{
    console.log('8080 port Connected!!!!');
})