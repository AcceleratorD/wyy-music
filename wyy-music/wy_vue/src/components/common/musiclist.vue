<template>
    <div class="m_sheet" @touchmove="move">
        <!-- 固定 -->
        <div class="musiclist-f">
            <!-- fh 淡入 -->
            <div class="fh">
                <!-- left -->
                <div class="fh-l">
                    <div @click="ret">
                        <img src="../../assets/l_arrow.png" alt="">
                    </div>
                    <div class="fh-text">{{headertext}}</div>
                </div>
                <!-- right -->
                <div class="fh-r">
                    <img src="../../assets/ss2.png" alt="">
                    <img src="../../assets/more2.png" alt="">
                </div>
            </div>
            <!--  v-show="!isshow" -->
            <div v-show="!isshow" class="musiclist-b2">
                <div v-show="!isshow" class="music-list-h1">
                    <div class="musiclist-l">
                        <img src="../../assets/play.png" alt="">
                        <span>播放全部</span>
                    </div>
                    <div class="musiclist-r">
                        <button>收藏</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 填充 -->
        <div class="tc"></div>
        <div v-show="!isshow" class="tc"></div>
        <!-- header-2f-isshow -->
        <!-- musiclist-h 淡出 -->
        <div class="musiclist-h">
            <div class="h-2f">
                <div><img :src="simg" alt=""></div>
                <!-- h-2f-right -->
                <div>
                    <!-- title -->
                    <div>{{sheetdata.sname}}</div>
                    <div class="sheet-user">
                        <img src="../../assets/user1.jpg" alt="">{{sheetdata.suname}} &nbsp;&nbsp;<span class="jump"><img src="../../assets/yl2.png" alt=""></span>
                    </div>
                    <div class="d-text">
                        <div>{{sheetdata.detail}}</div>
                        <div class="jump"><img src="../../assets/yl2.png" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="vip-tz">
                <div class='vip-left'>
                    <img src="../../assets/pause.png" alt="">
                    <span>含一首VIP专享歌曲</span>
                </div>
                <div class="vip-right">
                    <span>首开VIP仅5元</span>
                    <img src="../../assets/yl.png" alt="">
                </div>
            </div>
        </div>
        <div class="musiclist-b">
            <div class="musiclist-b1">
                <div v-show="isshow" class="music-list-h2">
                    <div class="musiclist-l">
                        <img src="../../assets/play.png" alt="">
                        <span>播放全部</span>
                    </div>
                    <div class="musiclist-r">
                        <button>收藏</button>
                    </div>
                </div>
                <div class="music-list" v-for="(item,index) in musiclist" :key="index">
                    <div class="musiclist-l">
                        <div class="list-num">{{index+1}}</div>
                        <div>
                            <div>{{item.name}}</div>
                            <div class="singer">{{item.singer}}-{{item.spe}}</div>
                        </div>
                    </div>
                    <div class="musiclist-r">
                        <img src="../../assets/play.png" alt="">
                        <img src="../../assets/more.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <myfoot class=""></myfoot>
    </div>
</template>
<script>
import myfoot from './myfoot.vue'
export default {
    /*  //test
    created() {
        console.log(this.$store.state.playid)
        this.$store.dispatch('getplaying',2)
        console.log(this.$store.state.playid)
    },
    */
    data(){
        return {
            headertext:"歌单",
            y:232,
            isshow:true,
            // 歌单数据
            sheetdata:{},
            // 歌单大图
            simg:"",
            // 用户头像
            uimg:"",
            idsArr:[],
            musiclist:[
                {name:"不分手的恋爱",singer:"汪苏泷",spe:"好安静"},
                {name:"蠢货",singer:"封茗囧菌",spe:"Cover"},
                {name:"Git Fresh",singer:"Booty Music",spe:"Git Fresh"},
                {name:"嘿！姑娘",singer:"反光镜",spe:"释你"},
                {name:"两个恰恰好",singer:"旺福",spe:"旺福志"},
                {name:"突然想起你",singer:"林宥嘉",spe:"Senses Around Live Tour"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
                {name:"开到茶蘼",singer:"王菲",spe:"你王菲所以我王菲"},
            ]
        }
    },
    created() {
        var url="tsheet" 
        //后期传参获取推荐歌单tid 
        this.axios.get(url,{params:{tid:1}}).then(result=>{
            if(result.data.code==1){
                // 歌单数据
                this.sheetdata=result.data.data[0];
                // 歌单大图
                this.simg="http://127.0.0.1:3000/sheet/"+result.data.data[0].simg;
                this.uimg="http://127.0.0.1:3000/sheet/"+result.data.data[0].uimg;
                var ids=result.data.data[0].ids;
                var arr=ids.split(",")
                // console.log(arr)
                this.idsArr=arr;
            }else{
                this.$messagebox("消息",result.data.msg);
            }
        })
        /*
        // 请求获取歌单中歌曲详情
        this.axios.get(url,{params:{tid:1}}).then(result=>{
            if(result.data.code==1){
                // 歌单数据
                this.sheetdata=result.data.data[0];
                // 歌单大图
                this.simg="http://127.0.0.1:3000/tjsheet/"+result.data.data[0].simg;
                this.uimg="http://127.0.0.1:3000/tjsheet/"+result.data.data[0].uimg;
            }else{
                this.$messagebox("消息",result.data.msg);
            }
        })*/
    },
    methods: {
        move(){
            var box=document.querySelector(".musiclist-b");
            // fh 淡入 musiclist-h 淡出
            var fh=document.querySelector(".fh");
            var h2f=document.querySelector(".h-2f");
            var hvip=document.querySelector(".vip-tz");
            var ml=document.querySelector(".musiclist-b1");
            //console.log(box.scrollY)
            var y=box.offsetTop -document.documentElement.scrollTop;
            this.y=y;
            //console.log(this.y);
            var fh_a=0.6+0.0022*(232-this.y);
            var h2f_a=1-0.0053*(232-this.y);
            fh.style.backgroundColor=`rgba(85,87,60,${fh_a})`;
            h2f.style.opacity=h2f_a;
            hvip.style.opacity=h2f_a;
            ml.style.backgroundColor=`rgba(227,225,228,${h2f_a})`;
            if(this.isshow&&this.y<=40){
                this.isshow=false;
            }else if(this.isshow==false&&this.y>40){
                this.isshow=true
            }
            if(232-this.y>40){
                this.headertext="夏至已至：准备好躁动的心";
            }else if(232-this.y<=40){
                this.headertext="歌单"
            }
        },
        ret(){
            history.go(-1)
        }
    },
     components:{
      "myfoot":myfoot,
    },
}
</script>
<style scoped>
    .musiclist-f{
        position: fixed;
        left: 0;
        top: 0;
        width:100%;
        color: #fff;
        z-index: 10;
    }
    .musiclist-f>.fh{
        display: flex;
        justify-content: space-between;
        background-color: rgba(85,87,60,0.6);
    }
    .musiclist-f>.fh>.fh-l{display: flex;}
    .musiclist-f>.fh>.fh-l>.fh-text{line-height: 40px;}
    .musiclist-f>.fh>.fh-l>div>img,
    .musiclist-f>.fh>.fh-r>img,
    .music-list-h1>.musiclist-l>img,
    .music-list-h2>.musiclist-l>img{
        width:24px;
        height:24px;
        padding:8px;
    }
    .music-list-h1{color:#000;}
    .music-list-h1>.musiclist-r>button,
    .music-list-h2>.musiclist-r>button{
        margin:5px;
        width:100px;
        height:30px;
        background-color: #FF3A3A;
        color:#fff;
        border-radius: 15px;
    }
    .musiclist-l>span{
        font-size:14px; 
    }
    /* 填充 */
    .tc{
        height:40px;
        background-color: rgb(85,87,60);
    }
    .h-2f{
        padding:15px 10px;
        display: flex;
        text-align: left;
    }
    .h-2f>div>img{
        width:128px;
        height:128px;
        margin-right: 12px;
    }
    .sheet-user{
        font-size: 12px;
        margin:12px 0 14px 0;
        color:#ddd;
    }
    .sheet-user>img{
        width:30px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .d-text{
        display: flex;
        align-items: center;
        font-size: 12px;
        color:#acac9d;
    }
    .jump>img{
        width: 14px;
        height:14px;
        margin: -2px -3px 0 0;
    }
    .musiclist-h{
        background-color:rgb(85,87,60);
        color: #fff;
    }
    .musiclist-b,
    .musiclist-b2{background-color: rgb(85,87,60)}
    .musiclist-b1,
    .vip-tz{
        background-color:rgba(227,225,228,1);
    }
    .music-list-h1,
    .music-list-h2,
    .vip-tz{
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        display:flex;
        justify-content: space-between;
    }
    .vip-tz>.vip-left,
    .vip-tz>.vip-right{
        line-height: 33px;
    }
    .vip-tz>.vip-left>img,
    .vip-tz>.vip-right>img{
        margin:0 8px;
        width:24px;
        height:24px;
    }
    .vip-tz>.vip-left>span{
        font-size: 14px;
        color:#2c3e50;
    }
    .vip-tz>.vip-right>span{
        font-size: 14px;
        color:#aaa;
    }
    .music-list-h1,
    .music-list-h2,
    .music-list{background-color: #fff;}
    .music-list{
        padding:3px 0;
        display: flex;
        justify-content: space-between
    }
    .list-num{
        display: inline-block;
        width: 40px;
        line-height: 40px;
        color:#b4b4b4;
        text-align: center;
        font-size: 18px;
    }
    .music-list>.musiclist-r{
        display: flex;
    }
    .music-list>.musiclist-r>img{
        width: 25px;
        height: 25px;
        margin:7px 10px 0 0px;
    }
    .music-list>.musiclist-l{
        display: flex;
        font-size:14px;
        text-align: left;
    }
    .singer{
        font-size: 12px;
        color:#b4b4b4;
    }
</style>