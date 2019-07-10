<template>
  <div class="my-header">
      <div>
        <button @click="lr"><img src="../../assets/zd.png" alt=""></button>
        <ul class="head-nav">
          <li v-for="(item,index) in list" 
          :key="index">
            <a
              @click="setActive(index)"
              :class="[idx==index? 'active':'']"
            >{{item}}</a>
          </li>
        </ul>
        <div @click="search"><img src="../../assets/ss.png" alt=""></div>
      </div>
    </div>
</template>
<script>
  export default {
    name:"myheader",
    data(){
      return {
        list:["我的","发现","朋友","视频"],
      }
    },
    props:{
      idx:{default:""},
      active:{default:""},
      isright:{default:""},
      lr:{type:Function},
      setActive:{type:Function},
    },
    methods: {
      search(){
        this.$router.push("/search");
      }
    },
  }
</script>
<style scoped>
  .my-header{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 2;
    width:100%;
    background-color: #fff;
  }
  .my-header>div{
    margin:10px 10px;
    display:flex;
    justify-content: space-between;
    
  }
  .my-header>div>button{
    background-color: #fff;
    padding:0px 4px;
  }
	.my-header>div img{
    width:25px;
  }
  .my-header>div div img{margin-top: 4px;}
  .head-nav{
    display:flex;
    line-height: 35px;
  }
  .head-nav>li{padding:0 5px;}
  
  .head-nav>li a{color:#ddd;}
  .head-nav>li .active{
    color:#2c3e50;
    font-weight: bold;
  }
  .head-nav>li .active:hover{color: #2c3e50;}
</style>