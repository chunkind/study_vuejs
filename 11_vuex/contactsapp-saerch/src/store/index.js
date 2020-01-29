import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    contacts : []
  },
  mutations: {
    [Constant.SEARCH_CONTACT] : (state, payload) => {
      state.contacts = payload.contacts;
    }
  },
  actions : {
    // promise 패턴
    // [Constant.SEARCH_CONTACT] : (stroe, payload) => {
    //   axios.get(Constant.BASE_URL + payload.name)
    //   .then((response) => {
    //     store.commit(Constant.SEARCH_CONTACT, {contacts: response.data})
    //   })
    // }

    // async~await 패턴
    // async~await 자료 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
    async [Constant.SEARCH_CONTACT](store, payload){
      var response = await axios.get(Constant.BASE_URL + payload.name);
      store.commit(Constant.SEARCH_CONTACT, {contacts: response.data})
    }
  }
});

export default store;