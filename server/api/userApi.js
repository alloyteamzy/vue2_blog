var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// var getName = require('../../src/js/getLoginName');
var login_name = 'zygg';
console.log('get' + login_name);
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.pwd], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//查库操作(监测用户信息)
router.post('/searchUser', (req, res) => {
    var sql = $sql.user.check;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.pwd], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//留言API,新建留言
router.post('/writtenInfo', (req, res) => {
    var sql = $sql.message.written;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.message_list, params.author, params.date], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//留言API，获取留言列表
router.post('/messageList', (req, res) => {
    var sql = $sql.message.search;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.message_list], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//发表动态API,发表动态
router.post('/writtenDiary', (req, res) => {
    var sql = $sql.diary.written;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.diary_list, params.author, params.date], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//动态API，获取全部动态列表
router.post('/alldiaryList', (req, res) => {
    var sql = $sql.diary.search_all;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.diary_list], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//动态API，获取个人动态列表
router.post('/mydiaryList', (req, res) => {
    var sql = $sql.diary.search_myself;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.diary_list], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//评论API
router.post('/commentOn', (req, res) => {
    var sql = $sql.comment.written;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userid, params.msg_id, params.comment_message, params.create_time], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
//获取评论API
router.post('/commentGet', (req, res) => {
    var sql = $sql.comment.search;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.msg_id], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result)
            jsonWrite(res, result);
        }
    })
});
module.exports = router;