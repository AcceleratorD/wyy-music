<template>
    <div class="sheet">
        <div class="sheet-left">
            <div><img :src="'http://127.0.0.1:3000/mysheet/'+item.img" alt=""></div>
            <div class="sheet-l-r">
                <div class="sheet-name">{{item.lname}}</div>
                <div class="sheet-count">{{item.count}}首</div>
            </div>
        </div>
        <div class="sheet-right" @click="gd_system" :data-lid="item.lid"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:{
        item:{default:""}
    },
    methods: {
        
    },
    props:{
        item:{default:""},
        gd_system:{type:Function},
    },
}
</script>
<style scoped>
.sheet{
    display:flex;
    justify-content: space-between
}
.sheet>.sheet-left{
    display: flex;
    margin-top:5px;
}
.sheet>.sheet-left>div>img{
    width: 35px;
    height: 35px;
    margin:0 10px;
    border-radius: 5px;
}
.sheet>.sheet-left>.sheet-l-r>.sheet-name{
    font-size:15px;
    font-weight: 600;
}
.sheet>.sheet-left>.sheet-l-r>.sheet-count{
    font-size:13px;
    color:#aaa;
}
.sheet>.sheet-right{
    width:30px;
    height: 30px;
    margin-right: 5px;
    background-image: url("../../assets/row_more.png");
    background-size:30px 30px;
}
</style>