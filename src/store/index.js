import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        user_name: ''
    },
    mutations: {
        "SET_MSG": function(state, user_name) {
            state.user_name = user_name
            console.log('保存', state.user_name)
        }
    },
    getters: {
        "GET_MSG": function(state) {
            console.log('获取', state.user_name)
            return state.user_name
        }
    },
    actions: {
        "SET_MSG": function(state, user_name) {
            console.log('获取', state.user_name)
            store.commit("SET_MSG", user_name)
        }
    }
})
export default store