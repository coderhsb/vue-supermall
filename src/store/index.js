import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    pushGoods(state, payload){
      state.cartList.push(payload)
    },

    addGoodsNum(state, index){
      state.cartList[index].num += 1
    },

    changeChecked(state, payload){
      const index = state.cartList.findIndex(v => v.iid === payload)
      state.cartList[index].checked = !state.cartList[index].checked
    },
    handleAll(state, payload){
      state.cartList.forEach(v => v.checked = !payload)
    }
  },
  actions: {
    addCart(context, payload){
      return new Promise((resolve, reject) => {
        const index = context.state.cartList.findIndex(v => v.iid === payload.iid)
        if(index === -1){
          context.commit('pushGoods', payload)
          resolve('添加购物车成功~')
        }else{
          context.commit('addGoodsNum', index)
          resolve('已添加购物车~')
        }
      })
    }
  },
  modules: {
  }
})
