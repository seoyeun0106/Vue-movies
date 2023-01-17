import axios from 'axios';
const API_KEY ="9b0ceb74"

export default {
    namespaced:true,
    state:()=>({
        title:"",
        loading: false,
        movies:[]
    }),
    getters:{},
    mutations:{
        updateState(state,payload){
            console.log("committed")
            Object.keys(payload).forEach(key=>{
                state[key] = payload[key]
            })
        }
    },
    actions:{
        async searchMovies({commit, state}){
            commit('updateState',{
                loading:true,  
            })
            const res = await axios.get(`http://www.omdbapi.com/?s=${state.title}&apikey=${API_KEY}`); 
            commit('updateState',{
                movies:res.data.Search,
                loading:false,  
            })

        }
        
    },
}