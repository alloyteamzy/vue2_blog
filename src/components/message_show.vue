<template>
	<div class='main'>
		<commonhead></commonhead>
		<div class='message_title'>
			<span>留言列表</span>
		</div>
		<ul class='bg_brown'>
			<li v-for="(item, index) in items" v-if="index < page_num">
			   <div class='user_info_show'>
				    <div class='user_pic fl'>
				       <img src='../assets/img/user.jpg' class='w100'>
			        </div>
					<div class='fl'>
						<span class='message_author'>{{ item.author }}</span></br>
			            <span class='message_date'>{{ item.date}}  留言</span>
					</div>
					<div class='clear'></div>
			   </div>
               <span class='message_info'>{{ item.message_list }} </span>
			   <p class='text-right floor'>{{index+1}}#</p>
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
			  hidden:'hide'
		  }
		},
		components: {
        commonhead: commonhead
      },
	 created(){
		       var message_info = this.message_info;
			   this.author= unescape(setCookie.setInfo().name);
			   var author_info = this.author;
			   var currentdate = gettime.gettimer();
			   var self  = this;
			   window.onscroll = function (){
	           var scrollTopjs = document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;
    	       var scrollHeightjs = document.body.scrollHeight;
    	       var windowHeightjs = document.documentElement.clientHeight;
    	       if (scrollTopjs + windowHeightjs == scrollHeightjs) {　　
    	        //  console.log('js到底了！');
				 if(self.page_num < self.list_total){
						self.hidden = '';
			            self.page_num += 8;
				 }
				 else{ 
					   if($('.endInfo').length == 0){
						   var obj = "<span class='endInfo' style='width: 100%; display: block;text-align: center; font-size: 0.8rem;padding: 0.5rem 0;'>别拉了，已经加载完了!</span>";
						   $(".bg_brown").append(obj);
					   }
				 }
    	        }
				else{
				 self.hidden = 'hide';
				}
              }
		       if(this.author == ''){
                 this.classFade = '';
				 this.errinfo = '未登錄，請登錄！';
				}
               else{
				   axios.post('api/user/messageList', {
					message_list: message_info,
					author:author_info,
					date:currentdate
				}).then(function(response){
					self.items = response.data;
					self.list_total = response.data.length;
				    if(self.list_total >= 8){
				       self.page_num = 8;
			           }
			        else{
				        self.page_num = self.list_total;
			        }
					// console.log(response.data);
				})
			}
	   },
	   methods:{
		   	closemodel: function() {
             this.classFade = 'hide';
           }
	   }
	}
</script>
<style scoped src="../assets/css/m_edit.css"></style>