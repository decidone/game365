module.exports = function(app, conn, bodyparser){
    const express = require('express');
    const router = express.Router();
    router.use(express.static('pug'));

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
