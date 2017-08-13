<template>
    <div class='about h100'>
        <div class='about-area h100'>
        <div class='w100 text-center pb1'></div>
          <span class="about-info">作者：</span>
          <span class="about-info" style="font-family:simhei">AlloyTeamZy</span>
          <span class="about-info">邮箱：</span>
          <span class="about-info" style="font-family:simhei">zygg@zygg.cc</span>
          <span class="about-info" style="font-family:simhei">Github地址：</span>
          <span class="about-info" style="font-family:simhei"> <a href="https://github.com/alloyteamzy/vue2_blog/">Vue2_blog</a></span>
          AlloyTeamZy</br>
          2017.3
        </div>
<router-link to="/">
  <div class='back' style="position:fixed;bottom:0">
      <span class="letter-b letter-hover">回</span>
      <span class="letter-l letter-hover">到</span>
      <span class="letter-u letter-hover">首</span>
      <span class="letter-r letter-hover">頁</span>
      <span class="letter-r letter-hover">🌿</span>
  </div>
</router-link>
    </div>
</template>

<script type="text/javascript">
  import '../js/about.js'
  export default {
     mounted () {
      var aboutp =  this.$refs.aboutp;
      return aboutp;
      }
    }
</script>
<style scoped src="../assets/css/about.css"></style>
