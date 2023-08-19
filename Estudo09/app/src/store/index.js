import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name:'lucas',
      age: '18',
      job: 'embalador',
      id:1
    },
    user2:{

    },
  ShowAlert: true
  },
  getters: {
  },
  mutations: {
    ShowUser(state, data){
      console.log('funcionou',data)
      state.user = data
    },
    cuser2(state,data2){

    },
    alert(state, show){
      state.ShowAlert = show 
    }
  },
  actions: {
  },
  modules: {
  }
})
