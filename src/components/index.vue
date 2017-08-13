﻿<template>
<div class="index">
    <div>
      <canvas id="canvas" ref='canvas'></canvas>
	</div>
    <div class="logo_inline" title="溫度：啟動與自己和他人的深度對話">
</div>
<div class='info'>
      <p>人生若只如初見</p>
      <p>何事秋風悲畫扇♫</p>
</div>
<div class='footer'>
    <router-link to="/about"><span>關於我</span></router-link>|<span><router-link to="/diary/d_edit">發表動態</router-link></span>|<span><router-link to="/message_board/m_edit">給我留言🍀</router-link></span>
    <p><a href="http://www.miitbeian.gov.cn/">粤ICP备17055437号-1</a></p>
</div>
<div class="notice-bg" ref='wechat'>
				<div class="notice">
					<img src="../assets/img/iswechat.png"/>
				</div>
</div>
<div class='bgShow'></div>
</div>
</template>
<script>
    import '../assets/css/common.css'
    // import '../js/rain.js'
    import '../js/init.js'
    // import {rain} from '../js/rain.js' 
   
    export default {
      mounted () {    //钩子函数
    //   rain.rainbegin();
      if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
            if(window.location.href.indexOf("?mobile")<0){
                try{
                    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
                        var ua = window.navigator.userAgent.toLowerCase(); 
							if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 						     	
                            //   this.$refs.wechat.style.display = 'block';	
							  } 
		         }           
          }
            catch(e){}
       }
     }	
  }
}
</script>
<style scoped src="../assets/css/index.css"></style>
