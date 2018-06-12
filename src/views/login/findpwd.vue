<template>
  <div class="findpwd-container">
    <div class="editPwd-con">
      <div class="editPwd-logo"><img src="assets/images/logo.png"></div>
      <div class="editPwd-title">请输入您要找回密码的账户和邮箱地址</div>
      <div class="promptData" style="clear: both;">
        <span class="errorMessage"></span><label @click="close"><i class="iconfont icon-wrong"></i></label>
      </div>
      <div class="editPwd-form-box" style="clear: both;">
        <div class="editPwd-form"><input id="userName" type="text" placeholder="输入账号" maxlength="32"></div>
        <div class="editPwd-form"><input id="email" type="email" placeholder="输入邮箱"></div>
      </div>
      <div class="editPwd-btn">
        <button class="btn-confirm" @click="getBackPwd">找回密码</button>
        <button class="btn-return" @click="goBack">返回登录界面</button>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/images/logo.png'

  export default {
    methods: {
      goBack: function () {
        this.$router.push({path: '/login'});
      },
      close() {
        $(".promptData").hide();
      },
      getBackPwd: function () {
        var userName = $("#userName").val();
        var user_trim = $.trim(userName);
        var email = $("#email").val();
        var email_trim = $.trim(email);
        var data = {
          "userName": user_trim,
          "email": email_trim
        };
        app.req('post', '/api/sendEmail', data,
          function (rel) {
            var len = rel.length;
            var errMsg = "";
            // 输出出错信息
            for (var i in rel) {
              errMsg += rel[i].message;
              errMsg += i < (len - 1) ? "<br />" : "";
            }
            $(".errorMessage").html(errMsg);
            $(".promptData").show();
          }
        )
      }
    }
  }
</script>


<style scoped>
  .findpwd-container {
    height: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;
    background: #131313;
  }

  .editPwd-con {
    width: 340px;
    height: 400px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    margin-top: -200px;
    margin-left: -170px;
    top: 50%;
    left: 50%;
  }

  /*logo*/
  .editPwd-logo {
    margin-bottom: 40px;
  }

  /*title*/
  .editPwd-title {
    color: #fff;
    font-size: 20px;
    margin-bottom: 40px;
  }

  /*form*/
  .editPwd-form {
    margin-bottom: 20px;
  }

  .editPwd-form input[type=text], .editPwd-form input[type=email] {
    background: rgba(208, 208, 208, 1);
    height: 34px;
    width: 280px;
    border-radius: 18px;
    z-index: 999;
    text-indent: 1rem;
    border: 1px solid rgba(0, 0, 0, 0);
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    color: #666;
    -moz-transition: all 1s; /* Firefox 4 */
    -webkit-transition: all 1s; /* Safari 和 Chrome */
    -o-transition: all 1s; /* Opera */
    transition: all 1s;
  }

  .editPwd-form input[type=text]:focus, .editPwd-form input[type=email]:focus {
    outline: 0;
    background: #fff;
  }

  .editPwd-btn button {
    width: 130px;
    height: 36px;
    color: #fff;
    line-height: 36px;
    border-radius: 18px;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  .editPwd-btn button a {
    color: #fff;
  }

  .editPwd-btn button.btn-confirm {
    background: #4E93D6;
    margin-right: 15px;
  }

  .editPwd-btn button.btn-confirm:hover {
    background: #73B9FE;
  }

  .editPwd-btn button.btn-return {
    background: #65B844;
  }

  .editPwd-btn button.btn-return:hover {
    background: #78C25C;
  }

  .promptData {
    background: rgb(224, 78, 78);
    line-height: 36px;
    border-radius: 6px;
    width: 280px;
    margin-top: 10px;
    display: none;
  }

  .errorMessage {
    width: 100%;
    text-indent: 1rem;
    color: #fff;
  }

  .promptData span {
    font-size: 0.8rem;
  }

  .promptData label {
    float: right;
    display: inline-block;
    margin-right: 1rem;
  }

  .promptData label i {
    font-size: 0.6rem;
  }

  .promptData label:hover {
    cursor: pointer;
  }
</style>
