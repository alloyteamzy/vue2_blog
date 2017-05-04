<template>
  <div>
     <input type="text" :value='msg' @change='inputMsg'>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default({
computed:mapState({
  msg:state => state.msg
}),
methods:{
    inputMsg:function(e){
      this.$store.commit('SET_MSG',e.target.value)
      this.$router.push("/b")
    }
  }
})
</script>
