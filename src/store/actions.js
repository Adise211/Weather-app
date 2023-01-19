import { forecastByDays } from '../api.js';

export default {
    async fetchForecastByDays(context, payload) {
        console.log("payload in actions", payload);
        const data = await forecastByDays({ days: payload.days, cityKey: payload.cityKey });
        context.commit('setForecast', data);
        
    }

}