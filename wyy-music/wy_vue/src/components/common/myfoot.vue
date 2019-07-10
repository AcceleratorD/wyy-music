<template>
    <div class="footer">
        <div class="footer-left">
            <div><img src="../../assets/305.jpg" alt=""></div>
            <div class="footer-l-r">
                <div class="footer-title">不分手的恋爱</div>
                <div class="footer-sub">汪苏泷</div>
            </div>
        </div>
        <div class="footer-right">
            <div class="p_or_s" @click="p_or_s">
                <img v-show="!isplay" src="../../assets/play.png" alt="">
                <img v-show="isplay" src="../../assets/pause.png" alt="">
            </div>
            <div class="playlist"><img src="../../assets/playlist.png" alt=""></div>
            <audio id="a1" :src="path"></audio>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isplay:false,
            path:""
        }
    },
    created() {
        var url="music";
        this.axios.get(url).then(result=>{
        if(result.data.code==1){
            // console.log(result.data.data[0].path);
            this.path="http://127.0.0.1:3000/audio/"+result.data.data[0].path;
        }else{
            this.$messagebox("消息",result.data.msg);
        }
      })
    },
    methods: {
        p_or_s(e){
            e.preventDefault();
            var a1=document.getElementById("a1");
            if(!this.isplay){
                a1.play();
                this.isplay=true;
            }else if(this.isplay){
                a1.pause();
                this.isplay=false;
            }
        }
    },
}
</script>
<style scoped>
    .footer{
        box-sizing: border-box;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.9);
        height:55px;
        display: flex;
        justify-content: space-between;
        padding:5px 10px 0;
        color:#000;
    }
    .footer-left{
        display: flex;
    }
    .footer-left>div:first-child{
        width:45px;
        height:45px;
        border-radius: 50%;
        overflow: hidden;
    }
    .footer-left>div:first-child>img{
        width:100%;
    }
    .footer-left>.footer-l-r{
        margin-left:8px;
        margin-top:4px;
    }
    .footer-left>.footer-l-r>.footer-title{
        font-size: 14px;
    }
    .footer-left>.footer-l-r>.footer-sub{
        font-size: 13px;
        text-align: left;
        color:#666;
    }
    .footer-right{display: flex;}
    .footer-right>.p_or_s>img{
        width:33px;
        height:33px;
        margin:2px 8px 0px 0px;
    }
    .footer-right>.p_or_s>img:first-child{
        width:28px;
        height:28px;
        margin:5px 10px 0px 0px;
    }
    .footer-right>.playlist>img{
        width:22px;
        height:22px;
        margin:8px 8px 0px 8px;
    }
</style>