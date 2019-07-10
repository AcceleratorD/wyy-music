<template>
        <div class="container">
          <!--提示文字-->
          <div class="topslogin">
            <span>注册</span>
            <span class="closeSpan" @click="closeSpan">关闭</span>
          </div>
          <!--logo图片-->
          <div class="imgDiv">
            <img src="../assets/wdsc.png" class="logo">
          </div>
          <!--操作区域-->
          <div class="operateDiv">
            <!--账号-->
            <mt-field placeholder="请输入用户名" v-model="uname" class="myinput"></mt-field>
            <!--账号-->
            <mt-field placeholder="请输入手机号" v-model="phone" class="myinput"></mt-field>
            <!--密码-->
            <mt-field placeholder="请输入密码" type="password" v-model="upwd" class="myinput"></mt-field>
            <!--注册-->
            <div>
              <mt-button size="large" class="mybutton" @click="reg">注册</mt-button>
            </div>
          </div>
        </div>
      </template>
      <script>
      export default {
        data(){
          return {
            phone:"",
            upwd:"",
            uname:""
          }
        },
        methods: {
        closeSpan(){
            this.$router.push("/login");
        },
        reg(){
            //1.获取用户输入手机号 3~10
            var n=this.phone;
            //2.获取用户输入密码 3~8
            var p=this.upwd;
            // 获取用户输入用户名
            var uname=this.uname;
            //3.创建二个正则表达式
            var nreg=/^[0-9]{11}$/;
            var preg=/^[a-zA-Z0-9]{3,8}$/
            // 判断用户名是否为空 提出错误
            if(uname==""){
              this.$toast("请输入用户名");
              return;
            }
            //4.判断手机号格式不正确 提出错误
            if(!nreg.test(n)){
              this.$toast("请输入11位数字的手机号");
              return;
            }
            //5.判断密码格式不正确 提出错误
            if(!preg.test(p)){
              this.$toast("密码格式不正确");
              return;
            }
            //6.将手机号密码用户名发送 ajax请求
            var url="reg";
            var data=`phone=${n}&upwd=md5(md5(${p}))&uname=${uname}`;
            this.axios.post(url,data).then(result=>{
              if(result.data.code==1){
                this.$router.push("/Home");
              }else{
                this.$messagebox("消息",
                result.data.msg);
              }
            })
          }
        }
      }
      </script>
      <style scoped>
          /* 文字的布局样式 */
          .topslogin {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 52px;
            background: rgb(238, 238, 238);
            padding-left: 20px;
            padding-right: 20px;
          }
          /* 半闭样式 */
          .closeSpan {
            color: rgb(153, 153, 153)
          }
          /* 图片 logo 根样式 */
          .imgDiv {
            display: flex;
            justify-content: center;
            margin:50px 0;
          }
          /* 图片样式 */
          .logo{
            width: 80px;
            height: 80px;
          }
          /* 上面的线隐藏 */
          .mint-cell-wrapper  {
            background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
          }
          /* 输入框底边框样式 */
          .mint-cell-wrapper  {
            border-bottom: 1px solid #ff5000;
          }
      
          /* 修改按钮按钮下的默认颜色 */
          .mint-button::after {
              background-color: rgba(255,0,0,0.5);
          }
          /* 操作区域的样式*/
          .operateDiv {
            padding-left: 20px;
            padding-right: 20px;
          }
          /* 输入框边距 */
          .myinput {
            margin-top: 20px;
          }
          /* 登录按钮边距 */
          .mybutton {
            margin-top: 20px;
          }
          /* 修改默认 butoon 的样式 */
          .mint-button--default {
            background-color:#f00;
            border-radius: 25px;
            color: #fff;
            height: 48px;
          }
          /* 修改默认弹框的样式 */
          .mint-msgbox{
            border-radius: 8px;
            width: 70%
          }
          /* 弹出框内容样式 */
          .mint-msgbox-content {
            min-height: 50px;
            font-size: 18px;
          }
          /* 弹出内容居中 */
          .mint-msgbox-message{
            line-height: 50px;
          }
          /* 弹出框确定按钮样式 */
          .mint-msgbox-btns{
            height: 60px;
          }
          /* 弹出框确定按钮字体 */
          .mint-msgbox-confirm {
            color: #f40;
          }
          /*输入框的背景色*/
          .mint-cell {
            background-color:#efeff4;
          }
      </style>