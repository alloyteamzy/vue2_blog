<template>
    <div class='about'>
        <div class='about-area'>
        <div class='w100 text-center pb1'><img src='../assets/img/stories.svg'></div>
          <span class="about-info">我們只有一輩子、短短的幾十年。</span>
          <span class="about-info">或許，這時間足夠去成就一件相信的事，</span>
          <span class="about-info">那你的那件事是什麼呢？</span>
          <span class="about-info">現在，是的，我說的是這個當下。</span>
          <span class="about-info">你所做的，是你相信且認同的嗎？ 沒有一絲絲的猶豫。</span>
          <span class="about-info"> 還是，</span>
          <span class="about-info">你正試圖在規則裡，證明一些什麼，或是爭取什麼。</span>
          <span class="about-info">總嚮往一些，過往匱乏的。</span>
          <span class="about-info">亦期待著那未被認同的，可以受到認同，有一天。</span>
          AlloyTeamZy</br>
          2017.3
        </div>
<router-link to="/">
  <div class='back'>
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
