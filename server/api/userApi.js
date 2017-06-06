var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

//使用连接池链接数据库

var pool = mysql.createPool(models.mysql);

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

//Vue_blog接口

// 增加用户接口
router.use('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//查库操作(检测用户信息)
router.use('/searchUser', (req, res) => {
    var sql = $sql.user.check;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//留言API,新建留言
router.use('/writtenInfo', (req, res) => {
    var sql = $sql.message.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.message_list, params.author, params.date], function(error, results, fields) {
        if (error) throw error
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//留言API，获取留言列表
router.use('/messageList', (req, res) => {
    var sql = $sql.message.search;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.message_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//发表动态API,发表动态
router.use('/writtenDiary', (req, res) => {
    var sql = $sql.diary.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.diary_list, params.author, params.date], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//动态API，获取全部动态列表
router.use('/alldiaryList', (req, res) => {
    var sql = $sql.diary.search_all;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.diary_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//动态API，获取个人动态列表
router.use('/mydiaryList', (req, res) => {
    var sql = $sql.diary.search_myself;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.diary_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//评论API
router.use('/commentOn', (req, res) => {
    var sql = $sql.comment.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.userid, params.msg_id, params.comment_message, params.create_time], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//获取评论API
router.use('/commentGet', (req, res) => {
    var sql = $sql.comment.search;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.msg_id], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});

//微信小程序接口

// 增加用户接口
router.use('/addUserwx', (req, res) => {
    var sql = $sql.wx_user.add;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//查库操作(检测用户信息)
router.use('/searchUserwx', (req, res) => {
    var sql = $sql.wx_user.check;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//留言API,新建留言
router.use('/writtenInfowx', (req, res) => {
    var sql = $sql.wx_message.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.message_list, params.author, params.date], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//留言API，获取留言列表
router.use('/messageListwx', (req, res) => {
    var sql = $sql.wx_message.search;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.message_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//发表动态API,发表动态
router.use('/writtenDiarywx', (req, res) => {
    var sql = $sql.wx_diary.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.diary_list, params.author, params.date], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//动态API，获取全部动态列表
router.use('/alldiaryListwx', (req, res) => {
    var sql = $sql.wx_diary.search_all;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.diary_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//动态API，获取个人动态列表
router.use('/mydiaryListwx', (req, res) => {
    var sql = $sql.wx_diary.search_myself;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.diary_list], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//评论API
router.use('/commentOnwx', (req, res) => {
    var sql = $sql.wx_comment.written;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.userid, params.msg_id, params.comment_message, params.create_time], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//获取评论API
router.use('/commentGetwx', (req, res) => {
    var sql = $sql.wx_comment.search;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.msg_id], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//测试Api
router.use('/test', function(req, res, next) {
    var _callback = req.query.callback;
    var _data = { email: 'zygg@zygg.cc', name: 'zygg' };
    if (_callback) {
        res.type('text/javascript');
        res.send(_callback + '(' + JSON.stringify(_data) + ')');
    } else {
        res.json(_data);
    }
});
module.exports = router;