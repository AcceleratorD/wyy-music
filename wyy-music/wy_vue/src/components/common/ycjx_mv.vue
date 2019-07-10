<template>
    <div class="ycjx">
        <div class="ycjx-1f">
            <a :href="hre">
                <img :src="require('../../assets/'+url)" alt="">
            </a>
        </div>
        <div class="ycjx-2f">
            <a :href="hre">
                <span>{{text}}</span>
            </a>
            <div>
                <button @click="xq()">
                    <img src="../../assets/more.png" alt="">
                </button>
                <div v-show="noxq" class="ycjx-msg">不感兴趣</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            noxq:false
        }
    },
    props:{
        url:{default:""},
        text:{default:""},
        hre:{default:""},
    },
    methods: {
        xq(){
            if(this.noxq){
                this.noxq=false;
            }else{
                this.noxq=true;
            }
        }
    },
}
</script>
<style scoped> 
.ycjx{
    padding:0 10px;
    border-bottom: 5px solid #eee;
}
.ycjx>.ycjx-1f>a{
    display: block;
    width:100%;
    color:#000;
    font-size:12px;
    margin-top:10px;
}
.ycjx>.ycjx-1f>a>img{
    width:100%;
    border-radius: 6px;
}
.ycjx>.ycjx-2f{
    display: flex;
    justify-content: space-between;
}
.ycjx>.ycjx-2f>a{
    display: block;
    width:100%;
    color:#000;
}
.ycjx>.ycjx-2f>a>span{
    font-size:13px;
    font-weight:600;
    display:block;
    text-align:left;
    margin:8px 0;
}
.ycjx>.ycjx-2f>div{position: relative;}
.ycjx>.ycjx-2f>div>button{
    background-color: #fff;
    margin-right: -5px;
}
.ycjx>.ycjx-2f>div>button>img{
    padding:5px;
    width:17px;
}
.ycjx>.ycjx-2f>div>.ycjx-msg{
    background-color: #fff;
    position: absolute;
    top:-30px;
    left:-70px;
    padding: 6px;
    width:100px;
    height:20px;
    color:#666;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
}
</style>