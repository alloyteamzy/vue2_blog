<template>
<div class='mylogin h100'>
    <div class="login h100">
        <form>
          <div class="form-area">
            <div class='login-icon'><img src='../assets/img/user.png' class='pic-full'></div>
            <input type="text" placeholder="Username" required="required" ref='user' name="username" v-model="userName" :value='user_name'><br>
            <div class='login-icon'><img src='../assets/img/pwd.png' class='pic-full'></div>
            <input type="password" placeholder="Password"  required="required" ref='pwd' name="pwd" v-model="pwd"><br>
            <div class='two-btns'>
              <router-link to="/register"><input type="button" value="Register" class='fl'></router-link>
              <input type="button" @click="checkUser" value="Login" class='fr'>
              <div class='clear'></div>
            </div>
        </form>
    </div>
    <input class='check_btn' type="hidden" id="chkRememberPass" name="chkRememberPass" checked="">
    <div class='footer'>
       <router-link to="/about"><span>關於溫度</span></router-link>|<span><router-link to="/diary">隱私權</router-link></span>|<span><router-link to="/message_board">給我留言🍀</router-link></span>
    </div>
    <div :class="[classbg, classFade]" ref='bg'>
	   <div class="modal" id="myModal" tabindex="2" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog">
            <div class="modal-content fadeIn">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" @click='closemodel'>
					&times;
				</button>
                    <h4 class="modal-title" id="myModalLabel">
                                                            提示
                    </h4>
                </div>
                <div class="modal-body">
                   <span>{{notice_info}}</span>
                   <span :class='[info_hide, pl2]'><router-link to="/diary"><span>隱私權</span></router-link><span :class='direct'>|</span><span><router-link to="/message_board">給我留言🍀</router-link></span></span>
                </div>
            </div>
        </div>
       </div>
</div>
</template>
<script>
    import {mapState} from 'vuex'
    import {setCookie} from '../js/setcookie.js'
    import axios from 'axios'
    import '../js/init.js'
    export default {
        computed:mapState({
         user_name:state => state.user_name
        }),
        data() {
            return {
                userName: '',
                pwd: '',
                classbg:'bg',
                classFade:'',
                notice_info:'用户名或者密码错误或者不存在！',
                info_hide:'hide',
                direct:'direct',
                pl2:'pl2'
            }
        },
        created () {
        // this.userName = unescape(setCookie.setInfo().name);
        // this.pwd = setCookie.setInfo().mypwd;
        this.classFade = 'hide'
        },
        methods: {
            closemodel: function() {
                this.classFade = 'hide'
            },
            checkUser() {
                var name = this.userName;
                var pwd = this.pwd;
                var self = this;  //很关键
                axios.post('api/user/searchUser', {
                    username: name,
                    pwd: pwd
                }).then(function (response){
                    var i,flag;
                    for (i in response.data) {             
                        if (name == response.data[i].user_name && pwd == response.data[i].user_pwd && name != '' && pwd != '') {
                            flag = 'allright';
                        }
                    }
                    if(flag == 'allright'){
                        var cookie_name= unescape(setCookie.setInfo().name);
                        if((cookie_name != name && name!= '' && cookie_name!= '' )|| cookie_name == ''){
                             setCookie.getInfo(self.userName,self.pwd);
                             setCookie.userLogin();
                             self.classFade = '';
                             self.info_hide = '';
                             self.notice_info = '登录成功！'
                        }
                        else if(cookie_name == name && name!= '' && cookie_name!= ''){
                             self.classFade = '';
                             self.info_hide = '';
                             self.notice_info = '登录成功！'
                        }
                    }
                    else{
                      self.classFade = ''
                    }
                }).catch(function (error) {
                   console.log(error);
              });
            }
        }
    }
//使用scoped属性可以保证样式只在该组件中起作用
</script>
<style scoped src="../assets/css/login.css"></style>
