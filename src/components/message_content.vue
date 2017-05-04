<template>
<div class='diary'>
    <headmenu></headmenu>
    <div class='content pr'>
      <div class="quote">有什麽想對我說的，都可以留言給我哦！</div>
      <router-link :to="to_url"><h3 class='name_show'>{{notice_info}}{{user_name}}</h3></router-link>
      <div class='edit_article' @click='isLogin'></div>
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
							{{errinfo}}
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import head from './head.vue'
    import {setCookie} from '../js/setcookie.js'
    import '../js/init.js'
    export default {
    components: {
    headmenu: head
      },
      data () {
        return {
          user_name: '',
          errinfo:'',
          classbg:'bg',
          classFade:'hide',
          notice_info:'',
          to_url:''
        }
      },
      created () {
       this.user_name= unescape(setCookie.setInfo().name);
      },
      mounted(){
       if(this.user_name == ''){
            this.notice_info = '請登錄！';
            this.to_url = './login'
       }
       else{
           this.notice_info = '歡迎妳，';
           this.to_url = ''
       }
      },
      methods: {
        isLogin: function () {
           if(this.user_name == ''){
              this.errinfo = '未登錄，請登錄！';
              this.classFade = ''
           }
           else{
              this.$router.push("message_board/m_edit")
           }
        },
        closemodel: function() {
           this.classFade = 'hide';
           }
      }
    }
</script>
<style scoped src="../assets/css/diary.css"></style>