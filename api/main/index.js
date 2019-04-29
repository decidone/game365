module.exports = function(app){
    const express = require('express');
    const router = express.Router();

    // DB 사용을 위한 기초 설정
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'cs1234',
        database : 'game365'
    });

    router.get('/',(req, res)=>{
        res.render('home');
    })

    router.get('/login',(req, res)=>{
        res.render('login');
    })

    router.post('/login/process',(req, res)=>{
        res.redirect('/main');
    })

    router.get('/search',(req, res)=>{
        res.render('searchgame');
        //res.redirect('/main');
    })

    router.get('/shop',(req, res)=>{
        res.render('shoppage');
    })

    return router;
}