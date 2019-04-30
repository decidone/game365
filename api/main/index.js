module.exports = function (app, conn, bodyparser) {
    const express = require('express');
    const router = express.Router();
    router.use(express.static('pug'));

    router.get('/', (req, res) => {
        // 프로젝트 테이블에서 선호도 기준으로 1~10위를 가져와서 results에 담는다.
        conn.query('SELECT * FROM project order by `likes` DESC limit 10', function (err, results) {
            if (err) {
                console.log(err);
            }
            //object타입 배열로 result 리턴을 games객체에 넣어서 pug페이지로 전달
            res.render('home', { games: results });
        });
    })

    router.get('/login', (req, res) => {
        res.render('login');
    })

    router.post('/login/process', (req, res) => {
        const id = req.body.id;
        const password = req.body.password;
        conn.query('SELECT * FROM user where user_id=\'' + id + '\' and user_pass=\''+password+'\'', function (err, results) {
            if (err) {
                console.log(err);
            }
            //로그인 성공 시
            if(results != ''){
                res.redirect('/main');
            }else{
            //로그인 실패 시
                res.render('login');
            }
        });
    })

    router.get('/search', (req, res) => {
        res.render('searchgame');
        //res.redirect('/main');
    })

    router.get('/shop', (req, res) => {
        res.render('shoppage');
    })

    return router;
}