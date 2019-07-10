<template>
    <div>
        <div class="friend" v-for="(item,index) in friendlist" :key="index">
            <!-- left -->
            <div class="friend-left">
                <img src="../../assets/mv_2.jpg" alt="">
            </div>
            <!-- right -->
            <div class="friend-right">
                <!-- name -->
                <div>
                    <a href="javascript:;">{{item.name}} </a>分享单曲：
                </div>
                <!-- 粉丝 -->
                <div class="fs">{{item.number}}粉丝</div>
                <!-- 内容 -->
                <div class="speak">{{item.text}}</div>
                <!-- img 最多九个 -->
                <div class="img">
                    <!-- <img :src="require('../../assets/'+item.img)" alt=""> -->
                    <img :src="'http://127.0.0.1:3000/'+item.img" alt="">
                </div>
                <!-- music 链接 -->
                <div></div>
                <!-- 转载留言点赞分享 -->
                <div class="cli">
                    <div class="cli-left">
                        <div><img src="../../assets/pause.png" alt=""><span>492</span></div>
                        <div><img src="../../assets/pause.png" alt=""><span>203</span></div>
                        <div><img src="../../assets/pause.png" alt=""><span>8513</span></div>
                    </div>
                    <div class="cli-right"><img src="../../assets/more.png" alt=""></div>                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            friendlist:[]
        }
    },
    
    created() {
        var url="friendmsg";
        this.axios.get(url).then(result=>{
            if(result.data.code==1){
                // console.log(result);
                this.friendlist=result.data.data
            }
            else{
                this.$messagebox("消息",result.data.msg);
            }
            
        })
    },
    
}
</script>
<style scoped>
.friend{
    display: flex;
    justify-content: space-between;
    padding:0 25px 0 10px;;
    border-bottom:1px solid #ddd;
    margin-bottom: 10px;
}
.friend-left>img{
    width:50px;
    height:50px;
    border-radius: 50%;
}
.friend-right{
    margin-left: 4px;
    text-align: left;
    font-size: 15px;
}
.friend-right>.fs{
    font-size: 12px;
    color:#ddd;
    margin-top:5px;
}
.friend-right>.speak{
    margin:12px 0;
}
.friend-right>.img{
    width:100%;
    display: flex;
    justify-content: space-between;
}
.friend-right>.img>img{
    width:100%;
}
.cli{
    display: flex;
    justify-content: space-between;
    margin:8px 0;
}
.cli>.cli-left{
    display: flex;
}
.cli>.cli-left>div{
    margin-right: 10px;
    display: flex;
}
.cli>.cli-left img{
    width:24px;
    height:24px;
}
.cli>.cli-left span{
    display:block;
    margin:4px 0 0 4px;
}
.cli>.cli-right img{
    width:18px;
    height:18px;
}
</style>