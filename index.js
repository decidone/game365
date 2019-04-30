var express = require('express');   //express --save 필요
var bodyparser = require('body-parser');    //body-parser --save 필요
var app = express();    // 넘겨서 따로 선언 안해도 되게 만들기
var fs = require('fs'); // 설치 안해도 쓸 수 있는 파일시스템

// DB 사용을 위한 기초 설정
var mysql = require('mysql');
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cs1234',
    database : 'game365'
});

app.use(express.static('pug'));
app.set('view engine','pug');
app.set('views','./pug');
app.use(bodyparser.urlencoded({extended:true}));
// /users 요청을 ./api/users로 넘겨준다.
app.use('/users', require('./api/users/index.js')(app, conn, bodyparser));
app.use('/main', require('./api/main/index.js')(app, conn, bodyparser));
app.use('/project', require('./api/project/index.js')(app, conn, bodyparser));

app.get('/',function(req,res){
    res.redirect('/main');
})

// app.get('/main',function(req,res){
//     res.render('home');
// })







// 이 아래로 샘플 코드
app.get('/topic',function(req,res){
    fs.readdir('data', function(err,files){
        if(err){
            res.send('Internal File Error');
        }
        res.render('view',{topics:files, title:'hello', desc:'javascript'});
    })
})

// 파일시스템을 사용하지 않을 때
// DB 테스트 추가
app.get('/topic/new', function(req,res){
    //conn.connect();
    conn.query('SELECT * FROM test', function (err, results){
        if(err){
            console.log(err);
        }
        //object타입 배열로 result 리턴을 topics객체에 넣어서 pug페이지로 전달
        res.render('new',{topics:results});
    });
    //conn.end();  //connect(), end()를 사용하면 err 출력
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