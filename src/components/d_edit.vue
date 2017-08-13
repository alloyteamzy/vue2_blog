<template>
	<div class='main'>
		<commonhead></commonhead>
		<div class='message_title'>
			<span>我的動態</span>
		</div>
		<textarea type='text' v-model='message_info' class='info_area'></textarea>
		<span class='text_center btn_style'>
		<button class='submit_btn' @click='written'>發表</button>
		<button class='submit_btn ml2' @click='show_info'>查看動態</button>
		</span>
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
			  classbg:'bg',
			  classFade:'hide',
			  errinfo:''
		  }
		},
		components: {
        commonhead: commonhead
      },
		methods: {
			written:function(){
			   var message_info = this.message_info;
			   this.author= unescape(setCookie.setInfo().name);
			   var author_info = this.author;
			   var currentdate = gettime.gettimer();
			   var self = this;
				if(message_info != '' && this.author != ''){
				axios({
					method: 'post',
					url: 'api/user/writtenDiary',
					data: {
						diary_list: message_info,
						author:author_info,
						date:currentdate
					},
					timeout: 3000
                }).then(function(response){
					// console.log(response);
					if(response.status == '200'){
						self.classFade = '';
				        self.errinfo = '發表成功！';
					}
					else{
						self.classFade = '';
				        self.errinfo = '發表失敗，未知的錯誤！';
					}
				}).catch(function(error) {
                        console.log(error);
                        self.classFade = '';
                        self.errinfo = '服務器繁忙，請刷新頁面或者稍後重試!(Error code: 504)'
                    });
			}
			else if(this.author == ''){
                 this.classFade = '';
				 this.errinfo = '未登錄，請登錄！';
				}
		   else if(message_info == ''){
				 this.classFade = '';
				 this.errinfo = '動態不能為空！';
			    }
			},
			closemodel: function() {
             this.classFade = 'hide';
			 if(this.errinfo == '發表成功！'){
                 this.$router.push("/diary/diary_show");
			 }
           },
		   show_info(){
			this.author= unescape(setCookie.setInfo().name);
            if(this.author == ''){
				 this.classFade = '';
				 this.errinfo = '未登錄，請登錄！';
			}
			else{
				this.$router.push("/diary/diary_show");
			}
		   }
		}
	}
</script>
<style scoped src="../assets/css/m_edit.css"></style>