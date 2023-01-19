import Vuex from 'vuex';
import Vue from 'vue';
import fetchForecastByDays  from './actions.js';
import setForecast  from './mutations.js';
import forecastDays  from './getters';


// I had some problem at the begining: console.log(this.$store) -> Prints: undefind
// Solved: download vuex version 3 instead of version 4! 
// $ npm install vuex@3 --save

Vue.use(Vuex);

export default new Vuex.Store({
    state() {
        return {
            forecast: ['hi','there']
        }
    },
    mutations: setForecast,
    actions: fetchForecastByDays,
    getters: forecastDays
});


