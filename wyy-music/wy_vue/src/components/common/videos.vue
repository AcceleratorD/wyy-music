<template>
    <div>
        <div class="ycjx">
            <ycjx v-for="(item,index) in list4" :key="index" :url="item.src" :text="item.span" :hre="item.href"></ycjx>
        </div>
        <div class="loadmore">
            <div></div>
        </div> 
    </div>
</template>
<script>
import ycjx from "./ycjx_mv"

export default {
    data(){
        return {
            list4:[
                {src:'mv_1.png',span:"视频介绍视频介绍视频介绍",href:"javascript:;"},
                {src:'mv_2.jpg',span:"视频介绍视频介绍视频介绍",href:"javascript:;"},
                {src:'mv_3.jpg',span:"视频介绍视频介绍视频介绍",href:"javascript:;"},
                {src:'mv_4.jpg',span:"视频介绍视频介绍视频介绍",href:"javascript:;"}
            ]
        }
    },
    components:{
        "ycjx":ycjx,
    }
}
</script>