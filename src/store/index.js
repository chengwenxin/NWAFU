import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router'
Vue.use(Vuex)
const state = {
  // 登录状态
  login: false,
  role:'',
  number:'',
  name:'',
  lastLoginTime:'',
  college:''
}

export default new Vuex.Store({
  state,
  mutations: {
    // 登录
    changeLogin(state, isLogin) {
      state.login = isLogin;
    },
    setBase(state,params){
      state.role = params.role;
      state.number = params.number;
      state.name = params.name;
      if(params.college){
        state.college = params.college
      }
    },
    lastLogin(state,time){
      state.lastLoginTime = time
    }

  }
})


