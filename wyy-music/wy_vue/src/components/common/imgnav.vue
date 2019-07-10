<template>
    <a :href="hre">
        <div>
            <img :src="require('../../assets/'+url)" alt="">   
        </div>
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
.imgnav>a{
    color:#000;
    font-size:12px;
}
.imgnav>a>div{
    width:45px;
    height:45px;
    border-radius: 50%;
    overflow: hidden;
    background-color:#f00;
    margin:0 auto;
}
.imgnav>a>div>img{
    width:25px;
    margin-top:8px;
}
.imgnav>a>span{
    display:block;
    text-align:center;
    margin-top:5px;
}
</style>