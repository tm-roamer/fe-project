import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		isHome: true,
		navId: '',
		menuId: ''
  },
  mutations: {
		isHome (state, param) {
			state.isHome = param.isHome;
			state.navId = param.navId;		// 切换导航
			state.menuId = param.menuId;  // 切换菜单
		}
  },
  actions: {

  }
})
