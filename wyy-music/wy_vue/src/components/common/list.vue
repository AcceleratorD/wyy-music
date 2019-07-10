<template>
    <a :href="hre">
        <img :src="require('../../assets/'+url)" alt="">
        <span>{{text}}</span>
    </a>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:{
        url:{default:""},
        text:{default:""},
        hre:{default:""},
    }
}
</script>
<style scoped>
.imgnav a{
    width:30%;
    color:#000;
    font-size:12px;
}
.imgnav a>img{
    width:100%;
    margin-top:10px;
}
.imgnav a>span{
    display:block;
    text-align:center;
    margin:5px 0;
}
</style>