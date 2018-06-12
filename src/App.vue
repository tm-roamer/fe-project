<template>
  <div id="app">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="container">
      <div class="sidebar">
        <app-sidebar></app-sidebar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import appHeader from '@/components/app-header.vue'
  import appSidebar from '@/components/app-sidebar.vue'

  export default {
    name: 'app',
    mounted() {
//      let a = [1,2,3];
//      for (let i of a){
//        console.log(i);
//      }
    },
    components: {
      appHeader,
      appSidebar
    }
  }
</script>

<style>
  #app {
    /* 对字体进行抗锯齿渲染 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    position: relative;
  }

  .header {
    width: 100%;
    height: 60px;
    background: #ddd;
  }

  .container {
    height: calc(100% - 60px);
    position: relative;
  }

  .sidebar {
    width: 200px;
    background: #10549c;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .content {
    padding-left: 200px;
    height: 100%;
  }
</style>

