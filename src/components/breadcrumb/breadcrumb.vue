<template>
  <div class="breadcrumb-container">
    <ul class="tool-bar-list clearfix">
      <li v-for="(item, index) in list">
        <a href="javascript:void(0)">
          {{item}}
          <span v-show="index !== list.length - 1">&gt;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
      fetchData() {
        this.list = [];
        let matched = this.$router.currentRoute.matched;
        for(let m of matched) {
          m.meta.name && this.list.push(m.meta.name)
        }
      }
    },
    mounted() {
      this.fetchData();
    },
  }
</script>

<style>

  .breadcrumb-container {
    width: 50%;
    float: left;
    height: 100%;
  }

  .tool-bar-list {
    margin-left: 10px;
    line-height: 37px;
  }

  .tool-bar-list li {
    float: left;
  }

  .tool-bar-list li a {
    color: #2e3b4a;
    margin: 0;
    padding: 0 5px;
    font-size: 12px;
    cursor: default;
    display: block;
  }

  .tool-bar-list li a span {
    margin-left: 10px;
  }
</style>
