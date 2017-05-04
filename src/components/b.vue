<template>
    <div class="form-group">
    <h1>信息是:{{msg}}</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
       computed:mapGetters({
           msg:'GET_MSG'
       })
}
</script>