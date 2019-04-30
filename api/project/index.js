module.exports = function (app, conn, bodyparser) {
    const express = require('express');
    const router = express.Router();
    router.use(express.static('pug'));

    router.get('/dev', (req, res) => {
        res.render('project_developer');
    })

    router.get('/list', (req, res) => {
        res.render('project_list');
    })

    router.get('/review', (req, res) => {
        res.render('project_review');
    })

    router.get('/review/list', (req, res) => {
        res.render('project_review_list');
    })

    router.get(['/about', '/about/:id'], (req, res) => {
        //id = 프로젝트 id
        const id = req.params.id;
        var result1;
        var result2;
        if (id) {
            conn.query('SELECT * FROM project where pro_id=' + id, function (err, results) {
                if (err) {
                    console.log(err);
                }
                result1 = results;
            });
            conn.query('SELECT * FROM pro_member where pro_id=' + id, function (err, results) {
                if (err) {
                    console.log(err);
                }
                result2 = results;
            });
            conn.query('SELECT * FROM pro_keyword where pro_id=' + id, function (err, results) {
                if (err) {
                    console.log(err);
                }
                //object타입 배열로 result 리턴을 game객체에 넣어서 pug페이지로 전달
                res.render('project_introduce', { games: result1, members:result2, keywords:results });
            });
        } else {
            res.render('project_introduce');
        }
    })

    router.get('/new_project', (req, res) => {
        res.render('addproject');
    })

    router.post('/new_project/process', (req, res) => {
        res.redirect('/project/list');
    })

    return router;
}