<template>
    <div class='pr'>
		<div class='logo'><img src='../assets/img/logo2017.svg' class='pic-full'></div>
		<div class='info_area'>
		 <router-link to="/login"><div class='user_img'><img src='../assets/img/user.jpg' class='pic-full'></div></router-link>
		 <div class='log_out' @click='logout'><img src='../assets/img/log_out.png' class='pic-full'></div>
		</div>
    </div>
</template>
<script>
    import {setCookie} from '../js/setcookie.js'
    export default {
        props: ['name'],
        methods:{
            logout:function(){  //清除用户登录信息
                setCookie.deleteCookie('userName','/');
                setCookie.deleteCookie('userPass','/');
                this.$router.push("/login");
            }
        }
    }
</script>
<style scoped src="../assets/css/head.css"></style>