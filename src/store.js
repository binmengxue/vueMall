// 创建一个store仓库
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  // state用来存放数据的对象
  state: {
    // 初始值、存放的东西
    cartnumber: 0,
    goodLists: []
  },
  // 定义取数据
  getters: {

  },
  mutations: {
    cartnumberClick(state, num) {
      state.cartnumber = state.cartnumber + num
    },
    acrtClick(state, num) {
      state.cartnumber = num
    },
    goolists(state, goods) {
      let goodLists = state.goodLists
      let ret2 = goodLists.findIndex((v) => {
        return v.id === goods.id
      })
      if (ret2 === -1) {
        goodLists.push(goods)
      } else {
        goodLists[ret2].num = goodLists[ret2].num + goods.num
      }
    }
  }
})
export default store
