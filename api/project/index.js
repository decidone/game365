const express = require('express');
const router = express.Router();
const app = express();

// DB 사용을 위한 기초 설정
var mysql = require('mysql');
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cs1234',
    database : 'game365'
});

router.get('/dev',(req, res)=>{
    res.render('project_developer');
})
router.get('/list',(req, res)=>{
    res.render('project_list');
})
router.get('/review',(req, res)=>{
    res.render('project_review');
})
router.get('/review/list',(req, res)=>{
    res.render('project_review_list');
})
router.get('/about',(req, res)=>{
    res.render('project_introduce');
})
router.get('/new_project',(req, res)=>{
    res.render('addproject');
})
module.exports = router;