module.exports = function(app){
    const express = require('express');
    const router = express.Router();
    //const usrCtrl = require('./user.controller')
    // DB 사용을 위한 기초 설정
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'cs1234',
        database : 'game365'
    });

    //하나의 라우팅에 그리 많은 정보가 현재까진 없으므로 따로 떼진 않는다.
    //router.get('/', usrCtrl.list);

    router.get('/library',(req, res)=>{
        res.render('library');
    })

    router.get('/mypage',(req, res)=>{
        res.render('mypage');
    })

    router.get('/register',(req, res)=>{
        res.render('register');
    })

    router.post('/register/process',(req, res)=>{
        res.redirect('/main');
    })

    router.get('/update/profile',(req, res)=>{
        res.render('update_profile');
    })

    router.post('/update/process',(req, res)=>{
        res.redirect('/main');
    })

    return router;
}
