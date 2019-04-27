var express = require('express');   //express --save 필요
var bodyparser = require('body-parser');    //body-parser --save 필요
var app = express();
var fs = require('fs'); // 설치 안해도 쓸 수 있는 파일시스템

app.set('view engine','pug');
app.set('views','./views');
app.use(bodyparser.urlencoded({extended:true}));
// /users 요청을 ./api/users로 넘겨준다.
app.use('/users', require('./api/users'));


app.get('/topic',function(req,res){
    fs.readdir('data', function(err,files){
        if(err){
            res.send('Internal File Error');
        }
        res.render('view',{topics:files, title:'hello', desc:'javascript'});
    })
})

// 파일시스템을 사용하지 않을 때
app.get('/topic/new', function(req,res){
    res.render('new');
})

app.get('/topic/:id',function(req,res){
    
    var id = req.params.id;
    fs.readdir('data', function(err,files){
        if(err){
            res.send('Internal File Error');
        }
        fs.readFile('data/'+id,'utf-8',function(err,data){
            if(err){
                res.send('Internal File Error');
            }
            res.render('view', {topics:files, title:id, desc:data});
        })
    })
})
app.post('/topic',function(req,res){
    var title = req.body.title;
    var desc = req.body.desc;
    fs.writeFile('data/'+title,desc,function(err){
        if(err){
            res.send('Internal File Error');
        }
        res.send('Success!');
    })
    res.redirect('/topic/'+title);
})


app.listen(8080,()=>{
    console.log('8080 port Connected!!!!');
})