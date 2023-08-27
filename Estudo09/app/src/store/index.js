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
  ShowAlert: true,
  ShowAlert2:true

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
    },
    alert2(state, show3){
      console.log('deu certo')
      state.ShowAlert2 = show3
    }
  },
  actions: {
  },
  modules: {
  }
})
