<template>
  <div class="updatapwd-container">
    <div class="editPwd-con">
      <div class="editPwd-logo"><img src="assets/images/logo.png"></div>
      <div class="editPwd-title">初次登录密码修改</div>
      <div class="editPwd-form-box">
        <div class="editPwd-form"><input type="text" placeholder="初始密码" maxlength="32"></div>
        <div class="editPwd-form"><input type="email" placeholder="重置密码" ></div>
        <div class="editPwd-form"><input type="email" placeholder="确认密码" ></div>
      </div>
      <div class="editPwd-btn">
        <button class="btn-confirm" @click="gotoFindPwd">找回密码</button>
        <button class="btn-return" @click="goto">返回登录界面</button>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/images/logo.png'

  export default {
    methods: {
      goto: function() {
        this.$router.push({path: '/login'});
      },
      gotoFindPwd: function() {
        this.$router.push({path: '/findPwd'});
      }
    }
  }
</script>


<style scoped>
  .updatapwd-container{
    height: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;
    background: #131313;
  }
  .editPwd-con{
    width:340px;
    height:400px;
    margin:0 auto;
    text-align: center;
    position: absolute;
    margin-top: -200px;
    margin-left: -170px;
    top: 50%;
    left: 50%;
  }
  /*logo*/
  .editPwd-logo{
    margin-bottom:40px;
  }
  /*title*/
  .editPwd-title{
    color: #fff;
    font-size:20px;
    margin-bottom:40px ;
  }
  /*form*/
  .editPwd-form{
    margin-bottom:20px;
  }
  .editPwd-form input[type=text],.editPwd-form input[type=email]{
    background: rgba(208,208,208,1);
    height:34px;
    width: 280px;
    border-radius: 18px;
    z-index: 999;
    text-indent: 1rem;
    border:1px solid rgba(0,0,0,0);
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    color: #666;
    -moz-transition: all 1s; /* Firefox 4 */
    -webkit-transition: all 1s; /* Safari 和 Chrome */
    -o-transition: all 1s; /* Opera */
    transition: all 1s;
  }
  .editPwd-form input[type=text]:focus,.editPwd-form input[type=email]:focus{
    outline: 0;
    background: #fff;
  }
  .editPwd-btn button{
    width:130px;
    height:36px;
    color: #fff;
    line-height: 36px;
    border-radius: 18px;
    border:0;
    outline: 0;
    cursor: pointer;
  }
  .editPwd-btn button a{
    color: #fff;
  }
  .editPwd-btn button.btn-confirm{
    background: #4E93D6;
    margin-right:15px;
  }
  .editPwd-btn button.btn-confirm:hover{
    background: #73B9FE;
  }
  .editPwd-btn button.btn-return{
    background: #65B844;
  }
  .editPwd-btn button.btn-return:hover{
    background: #78C25C;
  }
</style>
