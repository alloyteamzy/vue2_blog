<template>
    <div class='common_head'>
      <span @click='toLogin'>{{welcome_info}}{{user_name}}</span><span :class='[exit,pl8]' @click='exitLogin'>|  退出</span>
      <input type="hidden" :value=user_name class='nametest' ref='nametest'>
    </div>
</template>
<script>
    import {setCookie} from '../js/setcookie.js'
    export default {
        props: ['name'],
        data(){
            return{
                user_name:'',
                welcome_info:'',
                to_url:'',
                exit:'',
                pl8:'pl8'
            }
        },
        created(){
            this.user_name= unescape(setCookie.setInfo().name);
            if(this.user_name == ''){
                this.welcome_info = '請登錄！';
                this.to_url = '#/login';
                this.exit = 'hidden';           
             }
            else{
                this.welcome_info = '歡迎妳，';
                this.to_url = '';
                this.exit = '';
            }
        },
        methods:{
            toLogin(){
                if(this.welcome_info == '請登錄！'){
                    window.location.href = '#/login';
                }
            },
            exitLogin(){
                setCookie.deleteCookie('userName','/');
                setCookie.deleteCookie('userPass','/');
                window.location.href = '#/login';
            }
        }
    }
</script>
<style>
.common_head{
    width: 100%;
    height: 1.5rem;
    background-color: darkgoldenrod;
    line-height: 1.5rem;
    text-align: right;
    padding: 0 0.8rem;
    font-size: 0.7rem;
}
.hidden{
    display: none;
}
.pl8{
    padding-left: 0.8rem;
}
</style>