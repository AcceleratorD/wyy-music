<template>
    <div class="found">
        <lunbo></lunbo>
        <div class="imgnav">
            <imgnav v-for="(item,index) in nav" :url="item.src" :text="item.span" :hre="item.href"></imgnav>
        </div>
        <!-- 1F 推荐歌单 -->
        <div class="found-1f">
            <span>推荐歌单</span>
            <a href="javascript:;">歌单广场</a>
        </div>
        <div class="imgnav" @click="jumplist">
            <list v-for="(item,index) in list1" :url="item.src" :text="item.span" :hre="item.href"></list>
        </div>
        <div class="imgnav">
            <list v-for="(item,index) in list2" :url="item.src" :text="item.span" :hre="item.href"></list>
        </div>
        <!-- 2F 新歌 -->
        <div class="found-2f">
            <span>新歌</span>
            <a href="javascript:;">更多新歌</a>
        </div>
        <div class="imgnav">
            <list v-for="(item,index) in list3" :url="item.src" :text="item.span" :hre="item.href"></list>
        </div>
        <!-- 3F 云村精选 -->
        <div class="found-3f">
            <span>云村精选</span>
            <a href="javascript:;">获取新内容</a>
        </div>
        <div class="ycjx">
            <ycjx v-for="(item,index) in list4" :url="item.src" :text="item.span" :hre="item.href"></ycjx>
        </div>
        <div class="loadmore">
            <div></div>
        </div>
    </div>
</template>
<script>
import lunbo from "./lunbo"
import imgnav from "./imgnav"
import list from "./list"
import ycjx from "./ycjx_mv"
export default {
    data(){
        return {
            nav:[
                {src:'mrtj.png',span:"每日推荐",href:"javascript:;"},
                {src:'mrtj.png',span:"歌单",href:"javascript:;"},
                {src:'mrtj.png',span:"排行榜",href:"javascript:;"},
                {src:'mrtj.png',span:"电台",href:"javascript:;"},
                {src:'mrtj.png',span:"直播",href:"javascript:;"}
            ],
            list1:[
                {src:'301.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"},
                {src:'302.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"},
                {src:'303.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"}
            ],
            list2:[
                {src:'304.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"},
                {src:'305.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"},
                {src:'306.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"}
            ],
            list3:[
                {src:'307.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"},
                {src:'308.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"},
                {src:'309.jpg',span:"歌单介绍歌单介绍",href:"javascript:;"}
            ],
            list4:[
                {src:'mv_1.png',span:"视频介绍视频介绍视频介绍",href:"javascript:;"},
                {src:'mv_2.jpg',span:"视频介绍视频介绍视频介绍",href:"javascript:;"},
                {src:'mv_3.jpg',span:"视频介绍视频介绍视频介绍",href:"javascript:;"},
                {src:'mv_4.jpg',span:"视频介绍视频介绍视频介绍",href:"javascript:;"}
            ]
        }
    },
    components:{
        "lunbo":lunbo,
        "imgnav":imgnav,
        "list":list,
        "ycjx":ycjx,
    },
    methods: {
        jumplist(){
            this.$router.push("/musiclist");
        }
    },
}
</script>
<style scoped>
.found>.imgnav{
    display:flex;
    justify-content: space-between;
    margin:0 10px;
}
.found-1f,.found-2f,.found-3f{
    text-align:left;
    margin-top:12px;
    padding:8px 10px 0;
    border-top:1px solid #eee;
    display:flex;
    justify-content: space-between;
}
.found-1f>span,.found-2f>span,.found-3f>span{
    font-weight: bolder;
    font-size: 15px;
}
.found-1f>a,.found-2f>a,.found-3f>a{
    color:#666;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding:2px 5px;
}
.loadmore{
    height:25px;
}
.loadmore>div{
    width:20px;
    height:18px;
    margin:0 auto;
    margin-top:5px;
    background-image: url("../../assets/icon_sprite.png");
    background-position: 40px 6px;
}
</style>