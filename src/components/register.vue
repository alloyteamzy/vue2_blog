<template>
	<div class='register'>
			<div class='form_area w80 pr'>
				<!--<img src='../assets/img/form_bg.png' class='w100'>-->
				<div class='input_area'>
					<h1>Sign Up</h1>
					<p class='pb5'>Want to sign up fill out this form!</p>
					<form>
						<span class='title'>Name</span>
						<input class='input' type="text" placeholder="Username" required="required" ref='user' name="username" v-model="userName" id="txtUserName"></input>
						</br>
						<span class='title pt5'>Password</span>
						<input class='input' type="password" placeholder="Password" required="required" ref='pwd' name="pwd" v-model="pwd" id="txtUserPass"></input>
						</br>
						<span class='title pt5'>RePassword</span>
						<input class='input' type='password' placeholder="RePassword" ref='repwd' required="" v-model='repwd'></input>
						</br>
						<input class='sign_btn' type="button" @click="addUser" value="Sign Up" />
            <input class='check_btn' type="checkbox" id="chkRememberPass" name="chkRememberPass" checked=""><span class='remember'>Remember me</span>
					</form>
				</div>
			</div>
					<div :class="[classbg, classFade]" ref='bg'>
						<div class="modal" id="myModal" tabindex="2" role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" @click='closemodel'>
					&times;
				</button>
										<h4 class="modal-title" id="myModalLabel">
                        提示
                    </h4>
									</div>
									<div class="modal-body">
									{{errinfo}}
									</div>
								</div>
							</div>
						</div>
					</div>
        <h2 class='author'>Created by AlloyTeamZy</h2>
        <h2 class='myurl'>www.zygg.cc</h2>
		</div>
</template>
<script type="text/javascript">
  import {setCookie} from '../js/setcookie.js'
  import axios from 'axios'
  import '../js/init.js'
   export default {
       data: function() {
           return {
               userName: '',
               pwd: '',
               repwd: '',
               errinfo: '',
               classbg:'bg',
               classFade:''
           }
       },
       created () {
      	setCookie.getInfo(this.userName,this.pwd);
        this.classFade = 'hide';
      },
       methods: {
           addUser() {
               var name = this.userName;
               var pwd = this.pwd;
               var repwd = this.repwd;
               var self = this;
               if (name == '' || pwd == '' || repwd == '') {
                   this.errinfo = '填写信息不完整';
                   this.classFade = ''
               } else if (pwd != repwd) {
                   this.errinfo = '二次密码不一致';
                   this.classFade = ''
               } else {
                   axios.post('api/user/searchUser', {
                       username: name,
                       pwd: pwd
                   }).then(function(response){
                       var i;
                       var flag = "noExist";
                       for (i in response.data) {
                           if (name == response.data[i].user_name) {
                               flag = 'Exist';
                           }
                       }
                       if (flag == 'Exist') {
                           self.errinfo = '用户名已被注册';
                           self.classFade = ''
                       } else if (flag == 'noExist') {
                           axios.post('api/user/addUser', {
                               username: name,
                               pwd: pwd
                           }).then(function(response){
                               if (response.status == 200) {
                                   self.errinfo = '注册成功，欢迎你，'+ name;
                                   self.classFade = ''
                                //    setCookie.getInfo(this.userName,this.pwd);
                                //    setCookie.userLogin();
                                   setTimeout("window.location.href = './#/login'",2000)
                               } else {
                                   self.errinfo = '注册失败，未知的错误';
                                   self.classFade = ''
                               }
                           })
                       }
                   })
               }
           },
           closemodel: function() {
                this.classFade = 'hide';
           }
       }
   }
</script>
<style scoped src="../assets/css/register.css"></style>