// var getName = require('../src/js/getLoginName.js');
// var name = getName.getName();
// console.log('get' + name);
var login_name = 'zygg'
    // sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user_info(user_name, user_pwd) values (?,?)',
        check: 'select user_name,user_pwd from user_info',
    },
    message: {
        written: 'insert into message_board(message_list, author, date) values (?,?,?)',
        search: 'select message_list, author, date from message_board'
    },
    diary: {
        written: 'insert into diary_board(diary_list, author, date) values (?,?,?)',
        search_myself: "select * from diary_board where author='" + login_name + "'",
        search_all: 'select * from diary_board'
    },
    comment: {
        written: 'insert into comment(userid, msg_id, comment_message, create_time) values (?,?,?,?)',
        search: 'select userid, msg_id, comment_message, create_time from comment'
    }
}
module.exports = sqlMap;