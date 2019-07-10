<template>
    <div class="set-row">
        <div class="set-left">
            <div><img :src="require('../../assets/'+item.src)" alt=""></div>
            <div>{{item.title}}</div>
        </div>
        <div class="set-right">{{item.spantext}}</div>
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
        font-size: 14px;
        color:#aaa;
        font-weight: 400;
        margin-top:2px;
        margin-right:6px;
    }    
</style>