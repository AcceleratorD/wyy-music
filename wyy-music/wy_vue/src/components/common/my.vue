<template>
    <div class="my">
        <div class="fh" v-show="isgd_system" @click="fh"></div>
        <div class="imgnav">
            <imgnav v-for="(item,index) in nav" :url="item.src" :text="item.span" :hre="item.href" :key="index"></imgnav>
        </div>
        <ul class="my-1f">
            <li>
                <img src="../../assets/bdyy.png" alt="">
                <a href="javascript:;">本地音乐&nbsp;&nbsp;<span>(0)</span></a>
            </li>
            <li>
                <img src="../../assets/zjbf.png" alt="">
                <a href="javascript:;">最近播放&nbsp;&nbsp;<span>(0)</span></a>
            </li>
            <li>
                <img src="../../assets/xzgl.png" alt="">
                <a href="javascript:;">下载管理&nbsp;&nbsp;<span>(0)</span></a>
            </li>
            <li>
                <img src="../../assets/wddt.png" alt="">
                <a href="javascript:;">我的电台&nbsp;&nbsp;<span>(0)</span></a>
            </li>
            <li>
                <img src="../../assets/wdsc.png" alt="">
                <a href="javascript:;">我的收藏&nbsp;&nbsp;<span>(专辑/歌手/视频/专栏/主题)</span></a>
            </li>
        </ul>
        <div class="my-2f">
            <div class="my-2f-left" @click="open_gd">
                <img v-show="!isopen" src="../../assets/yl.png" alt="">
                <img v-show="isopen" src="../../assets/xl.png" alt="">
                <span>自建歌单</span>
            </div>
            <div class="my-2f-right">
                <div><img src="../../assets/add.png" alt=""></div>
                <div><img src="../../assets/more.png" alt=""></div>
            </div>
        </div>
        <!-- 自建歌单列表 -->
        <div class="my_musicsheet" v-show="isopen">
            <!-- 自建歌单 -->
            <musicsheet
                v-for="(item,index) in my_musicsheet"
                :key="index+6"
                :item="item"
                :gd_system="gd_system"
            ></musicsheet>
            
        </div>
        <!-- 歌单修改菜单 -->
        <ul class="gdSystem" v-show="isgd_system">
            <!-- <li>编辑</li> -->
            <li @click="del">删除</li>
        </ul>
    </div>
</template>
<script>
import imgnav from './imgnav'
import musicsheet from './musicsheet'

export default {
    data(){
        return {
            nav:[
                {src:'mrtj.png',span:"驾驶模式",href:"javascript:;"},
                {src:'mrtj.png',span:"跑步FM",href:"javascript:;"},
                {src:'mrtj.png',span:"最新电音",href:"javascript:;"},
                {src:'mrtj.png',span:"小冰箱电台",href:"javascript:;"},
                {src:'mrtj.png',span:"编辑",href:"javascript:;"}
            ],
            isopen:true,
            my_musicsheet:[
                {img:'like.png',lname:"我喜欢",count:"0"},
            ],
            isgd_system:false,
            lid:0
        }
    },
    methods: {
        f5(){
            var url="msheet";
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    var arr=[{img:'like.png',lname:"我喜欢",count:"0"},]
                    this.my_musicsheet=arr.concat(result.data.data);
                }
            })
        },
        open_gd(){
            if(this.isopen){
                this.isopen=false;
            }else{
                this.isopen=true;
            }
        },
        gd_system(e){
            this.isgd_system=true;
            this.lid=e.target.dataset.lid;
        },
        del(){
            //确认提示消息
            this.$messagebox({
                title:"消息",
                message:"是否删除指定歌单",
                showConfirmButton:true,//是否显示确认按钮
                showCancelButton:true//是否显示取消按钮
            }).then(action=>{
                if (action=="cancel"){
                    return;
                }else{
                    //1.获取当前歌单lid
                    var lid=this.lid;
                    var obj={lid:lid};
                    //2.发送ajax删除商品
                    this.axios.get("del",{params:obj}).then(result=>{
                        console.log(result);
                        //3.刷新
                        this.isgd_system=false;
                        this.f5();
                    })
                }
            })
        },
        fh(){
            this.isgd_system=false;
        }
    },
    components:{
      "imgnav":imgnav,
      "musicsheet":musicsheet
    },
    props:{
        islogin:{default:""},
    },
    created() {
        this.f5()
    },
}
</script>
<style scoped>
.my>.imgnav{
    display:flex;
    justify-content: space-around;
    margin:0 10px;
}
.my>.my-1f>li{
    text-align: left;
    border-top:1px solid #eee;
    margin-top:10px;
    padding-top:10px;
    line-height: 30px;
}
.my>.my-1f>li>img{
    width: 35px;
    height: 35px;
    padding:0px 30px;;
}
.my>.my-1f>li>a{
    color:#555;
    font-weight: 600;
}
.my>.my-1f>li>a>span{
    font-size: 13px;
    color:#aaa;
    font-weight: 500;
}
.my>.my-2f{
    margin-top:10px;
    border-top:8px solid #eee;
    text-align: left;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}
.my>.my-2f>.my-2f-left>img{
    width:35px;
    height: 35px;
    margin:5px 0px 5px 10px;
}
.my>.my-2f>.my-2f-left>span{
    font-weight: bolder;
    color:#333;
}
.my>.my-2f>.my-2f-right{
    display: flex;
}
.my>.my-2f>.my-2f-right>div{
    padding:9px 5px;
}
.my>.my-2f>.my-2f-right>div>img{
    width: 25px;
    height: 25px;
}
.my_musicsheet{
    padding:10px;
    text-align: left;
    border-bottom: 1px solid #eee;
}
.fh{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    /* background-color: #ccc; */
    background-color: transparent;
    z-index: 3;
}
.gdSystem{
    width:100%;
    position: fixed;
    background: #fff;
    z-index: 4;
    bottom: 0;
}
.gdSystem>li{
    line-height: 40px;
}
</style>