<template>
  <div class="header">
    <!-- logo -->
    <div class="logo" @click="goHome">
      <img :src="logo" alt="logo">
    </div>
    <!-- 导航 -->
    <div class="nav-container">
      <ul class="clearfix nav">
        <li v-for="(item, index) in nav" class="nav-item"
            :data-index="index"
            @click="selected(item.routerName)"
            :class="{active: item.routerName === active}">
          {{item.name}}
        </li>
      </ul>
    </div>
    <!-- 个人中心 & 设置 -->
    <div class="user">
      <ul clas="clearfix">
        <li class="item">
          <el-dropdown>
            <div class="el-dropdown-link">
              <i class="icon icon-userinfo"></i>
              <i class="icon icon-arrowdown"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户管理</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="v-line"></div>
        </li>
        <li class="item">
          <el-tooltip content="注销" placement="bottom-end">
            <a href="javascript:void(0)">
              <i class="icon icon-signout"></i>
            </a>
          </el-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import logo from '@/assets/images/logo.png'

  export default {
    name: 'app-header',
    computed: {
      active() {
        return this.$store.state.navId
      }
    },
    data() {
      return {
        logo: logo,
        prevActiveIndex: 0,
        nav: [
          {
            routerName: 'home',
            name: '首页'
          },
          {
            routerName: 'about',
            name: '关于我们'
          }
        ]
      }
    },
    methods: {
      goHome() {
        // this.$router.push("home");
      },
      selected: function (routerName) {
        this.$router.push({name: routerName});
      }
    }
  }
</script>

<style>
  .header {
    position: relative;
  }

  .header .logo {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    line-height: 100%;
    text-align: center;
  }

  .header .logo img {
    position: relative;
    height: 90%;
    top: 5%;
  }

  .header .nav-container {
    padding: 0 200px;
  }

  .header .nav-container .nav {
  }

  .header .nav-container .nav .nav-item {
    float: left;
    padding: 0 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.9rem;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .1s;
    color: #AFB4B8;

  }

  .header .nav-container .nav .nav-item:hover,
  .header .nav-container .nav .nav-item.active {
    border-bottom: 5px solid #20a0ff;
  }

  .header .user {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
  }

  .header .user .item {
    float: left;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    position: relative;
  }

  .header .user .v-line {
    position: absolute;
    right: 0;
    height: 33%;
    top: 33%;
    background: #AFB4B8;
    opacity: 0.2;
  }

  .header .user .item:first-child {
    width: calc(150px - 4rem);
  }

  .header .user .item:last-child {
    width: 4rem;
  }

  .header .user .item a {
    text-decoration: none;
    color: #AFB4B8;
  }

  .header .user .item .icon {
  }
</style>
