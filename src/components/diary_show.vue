<template>
	<div class='main'>
		<commonhead></commonhead>
		<div class='message_title'>
			<span>動態列表：</span>
			<select name="myselect" id="myselect" @change='choose'>
				<option value="my">個人動態</option>
				<option selected='' value="all">全部動態</option>
			</select>
		</div>
		<ul class='bg_brown'>
			<li v-for="(item, index) in items" v-if="index < page_num">
			   <div class='user_info_show'>
				    <div class='user_pic fl'>
				       <img src='../assets/img/user.jpg' class='w100'>
			        </div>
					<div class='fl'>
						<span class='message_author'>{{ item.author }}</span></br>
			            <span class='message_date'>{{ item.date}}  發表動態</span>
					</div>
					<div class='clear'></div>
			   </div>
               <span class='message_info'>{{ item.diary_list }} </span>
			   <div :class="[text_right,icon_hide]">
				   <div class='message_icon' @click='reward(index)'><img src='../assets/img/message_icon.png' class='w100'></div>
			   </div>
			   <div :class='[reward_area,reward_hide]'>
			   <form action="">
				    <input type="hidden" name="msgId" :value="item.msg_id" class='msg_id'>
					<textarea type='text' class='reward_input' placeholder="在這裏評論"></textarea>
					<p class='two_btn'><span class='comment_btn' @click='comment(index)'>評論</span><span class='cancel_btn ml2' @click='cancel(index)'>取消</span></p>
					</div>
               </form>
			   <ul class='reward_list'></ul>
             </li>
		</ul>
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
								{{errinfo}}
							</div>
						</div>
					</div>
				</div>
		</div>
		<div :class='[loading_pic,hidden]'><img src='../assets/img/loading.gif' class='w100'></div>
	</div>
</template>

<script>
   import {setCookie} from '../js/setcookie.js'
   import {gettime} from '../js/getTime.js'
   import axios from 'axios'
   import commonhead from './common_head.vue'
   var rocker = require('../../server/sqlMap.js')
   export default {
	data(){
          return{
			  message_info:'',
			  author:'',
			  date:'',
			  items:'',
			  list_total:'',
			  page_num:'',
			  classbg:'bg',
			  classFade:'hide',
			  errinfo:'',
			  loading_pic:'loading_pic',
			  hidden:'hide',
			  reward_area:'reward_area',
			  reward_hide:'hide',
			  text_right:'text-right',
			  icon_hide:''
		  }
		},
		components: {
        commonhead: commonhead
      },
	 created(){
	var message_info = this.message_info;
		this.author = unescape(setCookie.setInfo().name);
		var author_info = this.author;
		var currentdate = gettime.gettimer();
		var self = this;
		window.onscroll = function() {
			var scrollTopjs = document.documentElement.scrollTop || window.pageYOfset || document.body.scrollTop;
			var scrollHeightjs = document.body.scrollHeight;
			var windowHeightjs = document.documentElement.clientHeight;
			if(scrollTopjs + windowHeightjs == scrollHeightjs) {　　
				//  console.log('js到底了！');
				if(self.page_num < self.list_total) {
					self.hidden = '';
					var remainder = self.list_total - self.page_num;
					if(remainder >= 8) {
						axios.post('api/user/commentGet', {}).then(function(response) {
							var length = self.page_num;
							var commentLength = response.data.length;
							var nextPage;
							if(commentLength > self.page_num + 8){
								nextPage = self.page_num + 8
							}
							else{
								nextPage = commentLength;
							}
							for(var i = self.page_num ; i < nextPage; i++) {
								var name = response.data[i].userid;
								var time = response.data[i].create_time;
								var content = response.data[i].comment_message;
								var msg_id = response.data[i].msg_id;
								var floor = $('.reward_list').eq(msg_id - 1).children().length + 1;
								var obj = "<li style='padding: 0.8rem 0.5rem;border: 1px solid #cdcdcd;margin: 0 21px 10px;list-style-type: none;'>" + "<span class='name'>" + name + "</span>" + "<span style='padding: 0 0.5rem;'>|</span>" + "<span class='time'>" + time + "</span>" + "<span class='floor' style='background-color: #CDCDCD;float: right;padding: 0.1rem 0.5rem;border-radius: 15%;'>" + floor + "#" + "</span>" + "</br>" + "<span class='content' style='padding-top: 0.5rem;display: inline-block;'>" + content + "</span>" + "</li>"
								$('.reward_list').eq(msg_id - 1).append(obj);
							}
							self.page_num += 8;
						})
					} else {
						axios.post('api/user/commentGet', {}).then(function(response) {
							var length = self.page_num;
							var commentLength = response.data.length;
							var nextPage;
							if(commentLength > self.page_num + remainder){
								nextPage = self.page_num + remainder
							}
							else{
								nextPage = commentLength;
							}
							for(var i = self.page_num; i < nextPage; i++) {
								var name = response.data[i].userid;
								var time = response.data[i].create_time;
								var content = response.data[i].comment_message;
								var msg_id = response.data[i].msg_id;
								var floor = $('.reward_list').eq(msg_id - 1).children().length + 1;
								var obj = "<li style='padding: 0.8rem 0.5rem;border: 1px solid #cdcdcd;margin: 0 21px 10px;list-style-type: none;'>" + "<span class='name'>" + name + "</span>" + "<span style='padding: 0 0.5rem;'>|</span>" + "<span class='time'>" + time + "</span>" + "<span class='floor' style='background-color: #CDCDCD;float: right;padding: 0.1rem 0.5rem;border-radius: 15%;'>" + floor + "#" + "</span>" + "</br>" + "<span class='content' style='padding-top: 0.5rem;display: inline-block;'>" + content + "</span>" + "</li>"
								$('.reward_list').eq(msg_id - 1).append(obj);
							}
							self.page_num += remainder;
						})
					}
				} else {
					if($('.endInfo').length == 0) {
						var obj = "<span class='endInfo' style='width: 100%; display: block;text-align: center; font-size: 0.8rem;padding: 0.5rem 0;'>别拉了，已经加载完了!</span>";
						$(".bg_brown").append(obj);
					}
				}
			} else {
				self.hidden = 'hide';
			}
		}
		if(this.author == '') {
			this.classFade = '';
			this.errinfo = '未登錄，請登錄！';
		} else {
			axios.post('api/user/alldiaryList', {}).then(function(response) {
				self.items = response.data;
				self.list_total = response.data.length;
				var list_total = self.list_total;
				if(self.list_total >= 8) {
					self.page_num = 8;
				} else {
					self.page_num = self.list_total;
				}
			})
			axios.post('api/user/commentGet', {}).then(function(response) {
				var length = self.page_num;
				console.log('1:' + self.page_num)
				for(var i = 0; i < length; i++) {
					var name = response.data[i].userid;
					var time = response.data[i].create_time;
					var content = response.data[i].comment_message;
					var msg_id = response.data[i].msg_id;
					var floor = $('.reward_list').eq(msg_id - 1).children().length + 1;
					var obj = "<li style='padding: 0.8rem 0.5rem;border: 1px solid #cdcdcd;margin: 0 21px 10px;list-style-type: none;'>" + "<span class='name'>" + name + "</span>" + "<span style='padding: 0 0.5rem;'>|</span>" + "<span class='time'>" + time + "</span>" + "<span class='floor' style='background-color: #CDCDCD;float: right;padding: 0.1rem 0.5rem;border-radius: 15%;'>" + floor + "#" + "</span>" + "</br>" + "<span class='content' style='padding-top: 0.5rem;display: inline-block;'>" + content + "</span>" + "</li>"
					$('.reward_list').eq(msg_id - 1).append(obj);
				}
			})
		}
	   },
	   methods:{
		   	closemodel: function() {
             this.classFade = 'hide';
           },
		    reward:function(index){
                 $('.reward_area').eq(index).removeClass('hide');
				 $('.message_icon').eq(index).addClass('hide');
		   },
		   comment:function(index){
			     var name = this.author;
				 var time = gettime.gettimer();
				 var content = $('.reward_input').eq(index).val();
				 var msg_id = $('.msg_id').eq(index).val();
				 var floor = $('.reward_list').eq(index).children().length+1;
				 var obj = "<li style='padding: 0.8rem 0.5rem;border: 1px solid #cdcdcd;margin: 0 21px 10px;list-style-type: none;'>"+"<span class='name'>"+name+"</span>"+"<span style='padding: 0 0.5rem;'>|</span>"+"<span class='time'>"+time+"</span>"+"<span class='floor' style='background-color: #CDCDCD;float: right;padding: 0.1rem 0.5rem;border-radius: 15%;'>"+floor+"#"+"</span>"+"</br>"+"<span class='content' style='padding-top: 0.5rem;display: inline-block;'>"+content+"</span>"+"</li>"
				 axios.post('api/user/commentOn', {
					userid: name,
					msg_id: msg_id,
					comment_message: content,
					create_time: time
				}).then(function(response){
					// console.log(response.data)
				})
				 $('.reward_list').eq(index).append(obj);
				 $('.reward_area').eq(index).addClass('hide');
				 $('.message_icon').eq(index).removeClass('hide');
				 $('.reward_input').eq(index).val('');
		   },
		   cancel:function(index){
			     $('.reward_area').eq(index).addClass('hide');
				 $('.message_icon').eq(index).removeClass('hide');
				 $('.reward_input').eq(index).val('');
		   },
		   choose:function(){
				var opt=$("#myselect").val();
				if(opt == 'all'){
					window.location.reload();
				}
				else if(opt == 'my'){
                    var nowName =  this.author
					for(var j=0;j<this.list_total;j++){
						var listDom = $('.bg_brown').children('li').eq(j);
						var name =$(listDom).children().eq(0).children().eq(1).children().eq(0).text();
						if(name != nowName){
							$(listDom).hide();
						}
					}
				}
		   }
	   }
	}
</script>
<style scoped src="../assets/css/m_edit.css"></style>