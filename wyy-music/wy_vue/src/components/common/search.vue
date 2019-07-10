<template>
    <div class="search">
        <div class="head">
            <div @click="ret">
                <img src="../../assets/l_arrow2.png" alt="">
            </div>
            <input placeholder="大家都在搜 蠢货" type="text" name="" id="" v-model="value">
            <div @click="enter" class="enter">
                <img src="../../assets/ss.png" alt="">
            </div>
        </div>
        <div class="bod">
            <div class=title>
                <div>历史记录</div>
                <div @click="delAll"><img src="../../assets/del.png" alt=""></div>
            </div>
            <!-- 历史记录 -->
            <div class="hist">
                <!-- 后期添加 data-hid 添加单个历史记录删除功能 -->
                <span v-for="(item,index) of histList" :key="index" @click="add" :data-val="item">{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:"",
            histList:["Booty Music","凉凉"]
        }
    },
    methods: {
        ret(){
            history.go(-1)
        },
        enter(){
            console.log("跳转歌曲详细页")
            // 如果已存在则不放入
            if(this.histList.includes(this.value)){
                return;
            }else{
                this.histList.unshift(this.value)
            }
        },
        add(e){
            this.value=e.target.dataset.val;
        },
        delAll(){
            this.$messagebox({
                title:"消息",
                message:"是否清空历史记录",
                showConfirmButton:true,//是否显示确认按钮
                showCancelButton:true//是否显示取消按钮
            }).then(action=>{
                if (action=="cancel"){
                    return;
                }else{
                    this.histList=[];
                }
            })
        }
    },
    created() {
        var str=sessionStorage.getItem("historyList");
        var arr=JSON.parse(str);
        if(arr==null){
            this.histList=["Booty Music","凉凉"];
        }else if(arr.length==0){
            this.histList=[];            
        }else{
            this.histList=arr;
        }
    },
    beforeDestroy(){
        var arr= this.histList;
        var str = JSON.stringify(arr);
        sessionStorage.setItem("historyList",str);
    }
}
</script>
<style scoped>
.head{
    display: flex;
    margin: 8px 10px;
}
.head>div:first-child{
    width: 40px;
    height:40px;
}
.head>div>img{
    width: 40px;
    height:40px;
}
.head>.enter{
    margin: 0 8px 0 10px;
}
.head>.enter>img{
    width:30px;
    height:30px;
    margin-bottom: -20px;
}
.head>input{
    width: 100%;
    border-bottom: 2px solid #ddd;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #666;
}
.head>input:focus{
    border-bottom: 2px solid #aaa;
}
.bod{
    margin: 8px 10px;
    text-align: left;
    color: #333;
}
.bod>.title{
    display: flex;
    justify-content: space-between
}
.title>div{
    line-height: 35px;
}
.title>div>img{
    width:35px;
    height:35px;
}
.hist>span{
    font-size: 15px;
    background-color: #bbb;
    border-radius: 40%;
    padding: 4px 10px;
    margin:0 4px;
}
</style>