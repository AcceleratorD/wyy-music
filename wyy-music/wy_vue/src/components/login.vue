<template>
  <div class="container">
    <div @click="retu" class="left-teturn"><img src="../assets/zl.png" alt=""></div>
    <div class="logo"><img src="../assets/logo.jpg" alt=""></div>
    <div class="mybtn">
      <mt-button size="large" class="mybutton" @click="jumplogin">登录</mt-button>
      <mt-button size="large" class="mybutton mybutton2" @click="jumpreg">注册</mt-button>
    </div>
    <div class="protocol">已阅读<a href="javascript:;">《用户协议》</a>和<a href="javascript:;">《隐私政策》</a></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:""
    }
  },
  methods: {
    retu(){
      this.$router.push("/Home");
    },
    jumplogin(){
      this.$router.push("/loginReal");
    },
    jumpreg(){
      this.$router.push("/reg");
    }
  }
}
</script>
<style scoped>
  .container{
    position: fixed;
    width:100%;
    height:100%;
    background-color: #f00;
  }
  .container>.left-teturn{
    text-align: left;
    margin:20px 0 0 15px;
  }
  .container>.left-teturn>img{
    width:30px;
    height:30px;
  }
  .container>.logo{
    padding-top:100px;
  }
  .container>.logo>img{
    width:45px;
    height:45px;
    border-radius: 50%;
  }
  .container>.mybtn{
    padding:0 25px;
    margin-top:240px;
  }
  /* 修改按钮按钮下的默认颜色 */
  .mint-button::after{
      background-color: rgba(255,0,0,0.5);
  }
  .mybutton{
      margin-top: 20px;
  }
  .mybutton{
    background-color:#fff;
    border-radius: 25px;
    color: #f00;
    height: 38px;
  }
  .mybutton2{
    background-color:#f00;
    color: #fff;
    border:1px solid #fff;
  }
  .protocol{
    margin-top:50px;
    font-size: 12px;
    color: #ddd;
    font-weight: 300;
  }
  .protocol>a{
    color:#fff;
    font-weight: 600;
  }
</style>