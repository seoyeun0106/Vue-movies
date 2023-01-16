import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
const API_KEY ="9b0ceb74"
Vue.use(Vuex);

export default new Vuex.Store({
    namespaced:true,
    state:()=>({
        title:"",
        loading: false,
        movies:[]
    }),
    getters:{},
    mutations:{
        updateState(state,payload){
            Object.keys(payload).forEach(key=>{
                state[key] = payload[key]
            })
        }
    },
    actions:{
        async serachMovies({state,commit}){
            commit('updateState',{
                loading:true,  
            })
            const res = await axios.get(`http://www.omdbapi.com/?s=magic&apikey=${API_KEY}`); 
            state.movies = res.data.Search
            commit('updateState',{
                loading:false,  
            })

        }
        
    },
})