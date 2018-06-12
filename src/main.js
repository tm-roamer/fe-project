import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/assets/styles/reset.css'							// 重置样式
import '@/assets/styles/media.css'							// 媒体查询
import '@/assets/fonts/iconfont.css'						// 图标字体
import 'element-ui/lib/theme-chalk/index.css' 	// element-ui
import '@/assets/styles/theme.css'							// 定制element-ui
import '@/assets/styles/main.css'								// 主样式文件

Vue.use(ElementUI, { locale });

// Vue.use(ElementUI, { size: 'small'}); // size用于改变组件的默认尺寸，zIndex设置弹框的初始 z-index（默认值：2000）

// 添加实例方法, 使用基于Promise的HTTP请求插件
Vue.prototype.axios = axios;

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default app;
