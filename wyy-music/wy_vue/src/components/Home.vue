<template>
  <div>
    <!-- 头 -->
    <myheader
      :isright="isright"
      :lr="lr"
      :active="active"
      :setActive="setActive"
      :idx="idx"
    ></myheader>
    <!-- 固定头填充 -->
    <div class="head-tc"></div>
    <!-- 主体 -->
    <mybody :active="active" :islogin="islogin"></mybody>
    <!-- 固定脚填充 -->
    <div class="bottom-tc"></div>
    <!-- 脚 -->
    <myfoot></myfoot>
    <!-- 左侧系统 -->
    <set v-show="isright"
      :isright="isright"
      :lr="lr"
      :islogin="islogin"
      :name="name"
      :uimg="uimg"      
    ></set>
  </div>
</template>
<script>
  import myheader from "./common/header.vue"
  import mybody from "./common/mybody.vue"
  import myfoot from "./common/myfoot.vue"
  import set from "./common/set.vue"
  export default {
    data(){
      return {
        idx:1,
        active:"tab2",
        isright:false,
        islogin:false,
        name:"",
        uimg:""
      }
    },
    methods: {
      setActive(index){
        this.idx=index;
        this.active="tab"+(index+1);
      },
      lr(){
        if(this.isright==false){
          this.isright=true;
        }else{
          this.isright=false;
        }
      },
    },
    components:{
      "myheader":myheader,
      "mybody":mybody,
      "myfoot":myfoot,
      "set":set
    },
    created() {
      // 发送请求 确认是否登录
      var url="islogin";
      this.axios.get(url).then(result=>{
        if(result.data.code==1){
            this.islogin=true;
            this.name=result.data.data[0].uname;
            this.uimg='http://127.0.0.1:3000/user/'+result.data.data[0].uimg;
        }else{
          this.islogin=false;
        }
      })
    },
    updated() {
      // 发送请求 确认是否登录
      var url="islogin";
      this.axios.get(url).then(result=>{
        if(result.data.code==1){
            this.islogin=true;
            this.name=result.data.data[0].uname
        }else{
          this.islogin=false;
        }
      })
    },
  }
</script>
<style scoped>
  /* 固定头填充 */
  .head-tc{
    height: 55px;
  }
  /* 固定脚填充 */
  .bottom-tc{
    height: 55px;
  }
</style>