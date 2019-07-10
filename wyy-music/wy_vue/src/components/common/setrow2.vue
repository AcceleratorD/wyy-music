<template>
    <div class="set-row">
        <div class="set-left">
            <div><img :src="require('../../assets/'+item.src)" alt=""></div>
            <div>{{item.title}}</div>
        </div>
        <div class="set-right"><mt-switch v-model="item.istrue"></mt-switch></div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:{
        item:{default:""}
    }
}
</script>
<style scoped>
    .set-row{
        display: flex;
        justify-content: space-between;
        padding:9px 0px;
        text-align: left;
    }
    .set-row>.set-left{
        display: flex;
        margin-top:4px;
    }
    .set-row>.set-left img{
        width:24px;
        height:24px;
        padding:0px 10px;
    }
    .set-row>.set-left>div{
        color:#000;
    }
    .set-row>.set-right{
        margin-right:6px;
    }    
</style>