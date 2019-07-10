<template>
    <div class="set">
        <div class="setlist">
            <div v-show="!islogin" class="logout">
                <div>
                    登陆网易云音乐
                    <br>
                    手机电脑多端同步，尽享海量高品质音乐
                </div>
                <button @click="login">立即登录</button>
            </div>
            <div v-show="islogin" class="login">
                <div><img :src="uimg" alt=""></div>
                <div>欢迎回来，{{name}}</div>
            </div>
            <div class="set-row-1f">
                <setrow v-for="(item,index) in setlist" :key="index+2" :item="item"></setrow>
            </div>
            <div class="set-row-2f">
                <setrowt v-for="(item,index) in setlist2" :key="index" :item="item"></setrowt>
            </div>
        </div>
        <div class="footset">
            <div>
                <img src="../../assets/pause.png" alt="">
                <div>夜间模式</div>
            </div>
            <div>
                <img src="../../assets/pause.png" alt="">
                <div>设置</div>
            </div>
            <div @click="login" v-show="!islogin">
                <img src="../../assets/pause.png" alt="">
                <div>登录</div>
            </div>
            <div @click="logout" v-show="islogin">
                <img src="../../assets/pause.png" alt="">
                <div>退出</div>
            </div>
        </div>
        <div class="cancel" @click="lr"></div>
    </div>
</template>
<script>
import setrow from "./setrow.vue"
import setrowt from "./setrow2.vue"
export default {
    name:"set",
    data(){
        return {
            setlist:[
                {title:"定时关闭",src:'pause.png',spantext:""},
                {title:"音乐闹钟",src:'pause.png',spantext:""},
                {title:"蝰蛇音效",src:'pause.png',spantext:""},
                {title:"听歌识曲",src:'pause.png',spantext:""},
                {title:"音乐工具",src:'pause.png',spantext:"听觉保护等"},
                {title:"驾驶模式",src:'pause.png',spantext:""},
                {title:"铃声彩铃",src:'pause.png',spantext:""},
                {title:"儿童专区",src:'pause.png',spantext:"快乐成长 有我陪伴"},
                {title:"网易商城",src:'pause.png',spantext:"粉丝专属优惠"},
            ],
            setlist2:[
                {title:"桌面歌词",src:'pause.png',istrue:false},
                {title:"锁屏歌词",src:'pause.png',istrue:true}
            ],
        }
    },
    methods: {
        login(){
            this.$router.push("/login");
        },
        logout(){
            this.axios.get("logout").then(result=>{
                if(result.data.code==1){
                    this.$router.push("/login");
                }else{
                    this.$messagebox("消息",result.data.msg);
                }
            })
        }
    },
    props:{
        islogin:{type:Boolean},
        lr:{type:Function},
        name:{default:""},
        uimg:{default:""}
    },
    components:{
        "setrow":setrow,
        "setrowt":setrowt,
    },
}
</script>
<style scoped>
    .set{
        width:100%;
        height:100%;
    }
    .set>.setlist{
        position: fixed;
        top:0px;
        left:0px;
        z-index: 3;
        width:80%;
        height:100%;
        background-color: #fff;
    }
    .set>.setlist>.logout,
    .set>.setlist>.login{
        margin-top:20px;
    }
    .set>.setlist>.logout>div{
        font-size: 12px;
    }
    .set>.setlist>.logout>button{
        margin-top:12px;
        padding:4px 15px;
        border:1px solid #ccc;
        border-radius: 15px;
        background-color: #fff;
    }
    .set>.setlist>.login img{
        width:70px;
        height:70px;
        margin-bottom: 10px;
        border-radius: 50%;
    }
    .set>.setlist>.set-row-1f{
        border-bottom: 1px solid #eee;
    }
    .set>.footset{
        position: fixed;
        bottom:0px;
        left:0px;
        z-index: 4;
        width:80%;
        display: flex;
        justify-content: space-around;
    }
    .set>.footset>div{
        display: flex;
        margin:5px 0;
    }
    .set>.footset img{
        width: 24px;
        height: 24px;
    }
    .set>.footset>div>div{
        color:#000;
        margin-left: 5px;
    }
    .set>.cancel{
        position: fixed;
        top:0px;
        right:0px;
        z-index: 3;
        width:20%;
        height:100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
</style>