import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        counter : 0
    },
    getters : {
        getCounter : (state) => {
            console.log(state);
            return state.counter;
        },
        stringCounter : state => {
            return state.counter + " Clicks";
        }
    },
    mutations : {
        increment : (state) => {
            state.counter++;
        },
        decrement : (state) => {
            state.counter--;
        }
    },
    actions : {
        asyncIncrement : ({commit}) => {
            setTimeout(()=>{
                commit('increment');
            }, 3000)
            
        },
        asyncDecrement : ({commit}) =>{
            setTimeout(()=>{
                commit('decrement');
            }, 3000)
        }
    }
})