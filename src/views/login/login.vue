<template>
  <div id="app-login">
    <div class="login-panel">
      <form method="post" name="myform" action="index.html" id="login-form">

        <div class="login-logo"><img src="/assets/images/logo.png"></div>
        <h3>Homework Console</h3>
        <div class="promptData" v-show="!isError" style="clear: both;">
          <span class="errorMessage"></span><label @click="close"><i class="iconfont icon-wrong"></i></label>
        </div>
        <ul @keyup.13="login">
          <li>
            <input type="text" :placeholder="i18n.username" maxlength="200" v-model.trim="userName"/>
          </li>
          <li>
            <input type="password" :placeholder="i18n.password" maxlength="200" size="200"
                   autocomplete="off" name="password" id="password" v-model="userPwd"/>
          </li>
          <li>
            <!--<button type="button" id="login" class="login-btn" @click="login">登 录</button>-->
            <el-button class="el-login-btn" :loading="isLoading" @click="login">{{i18n.login}}</el-button>
          </li>
          <!--<li class="login-forgetpassword">-->
          <!--<a href="javascript:void(0);" @click="findPwd">忘记密码</a>-->
          <!--</li>-->
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
  import '@/assets/images/logo.png'
  import Qs from 'qs';
  export default {
    name: 'app',
    data(){
      return {
        currentTime: new Date().getTime(),
        isError: false,
        userName: '',
        userPwd: '',
        isLoading: false
      }
    },
    methods: {
      findPwd () {
        this.$router.push({path: '/findpwd'});
      },
      login() {
        this.isLoading = true
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        let params = {
          username: this.userName,
          password: this.userPwd
        }

        this.axios.post('/api/service/auth/login', Qs.stringify(params), config)
          .then(res => {
            this.isLoading = false;
            this.$message.closeAll();
            if (res.data.code === 400) {
                this.$message({
                  duration: 0,
                  type: 'warning',
                  showClose: true,
                  message: this.i18n[res.data.info] // 'error_400_002'
                });
            }
            else if (res.data.code === 200) {
              this.localStore.set('name', res.data.data.name);
              this.cookie.set('token', res.data.data.token, {expires: 7});
              this.cookie.set('authority', JSON.stringify(res.data.data.role) , {expires: 7});
              this.cookie.set('permission', JSON.stringify(res.data.data.permission.map(function(per){
                return per.code;
              })) , {expires: 7});
              this.$router.push({path: '/'})
            }
          })
      },
      close() {
        this.isError = false;
      }
    },
    mounted: function () {
      if (this.cookie.get('token')) {
        this.$router.push({path: '/'})
      }
    },
    components: {}
  }
</script>

<style scoped>
  #app-login {
    background: -webkit-linear-gradient(top, #f85415 50%, #ff8f40);
    background: -moz-linear-gradient(top, #f85415 50%, #ff8f40 100%);
    background: -o-linear-gradient(top, #f85415 50%, #ff8f40 100%);
    background: -ms-linear-gradient(top, #f85415 50%, #ff8f40 100%);
    background: linear-gradient(180deg, #f85415 50%, #ff8f40);
    height: 100%;
    overflow: hidden;
    font-size: 0.9375rem;
  }

  .login-logo {
    margin-bottom: 30px;
    text-align: center;
  }

  .login-logo img {
    height: 53px;
  }

  .login-panel {
    border-radius: 7px;
    color: #fff;
    width: 280px;
    height: 385px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    margin-top: -200px;
  }

  #login-form {
    padding-top: 15px;
  }

  #login-form h3 {
    font-size: 1.375rem;
    padding-bottom: 10px;
    text-align: center;
  }

  #login-form li {
    text-align: center;
    margin-top: 20px;
  }

  #login-form li input {
    border: none;
    border-radius: 18px;
    height: 36px;
    width: 100%;
    text-indent: 1rem;
    background: rgba(255, 255, 255, 0.8);
    color: #656565;
    box-sizing: border-box;
  }

  #login-form li input:focus {
    outline: 0;
    /*border:1px solid #4E93D6;*/
    background: #fff;
  }

  #login-form li input.validate-code {
    height: 36px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    float: left;
    width: 60%;
  }

  #login-form li .img-validate {
    display: inline-block;
    height: 36px;
    width: 40%;
    line-height: 36px;
    float: left;
    background: #fff;
    border-top-right-radius: 18px !important;
    border-bottom-right-radius: 18px !important;
    color: #4F94D5;
    overflow: hidden;
  }

  #login-form li .img-validate img {
    margin-top: 2px;
  }

  #login-form li button.login-btn {
    width: 280px;
    border-radius: 18px;
    background: #4E93D6;
    height: 36px;
    line-height: 36px;
    color: #fff;
    border: 0;
    font-size: 14px;
  }

  #login-form li button.el-login-btn {
    width: 100%;

    border: none;
    border-radius: 35px;

    color: #fff;
    background: #4E93D6;
  }

  #login-form li button.login-btn:focus {
    outline: 0;
  }

  #login-form li button.login-btn:hover {
    background: #73B9FE;
    cursor: pointer;
  }

  #login-form .login-forgetpassword {
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
    font-size: 14px;
  }

  #login-form .login-forgetpassword a:hover {
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.7);
  }

  .promptData {
    background: rgb(224, 78, 78);
    line-height: 36px;
    border-radius: 6px;
    width: 100%;
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

  /*a*/
  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #ff6600;
  }
</style>
