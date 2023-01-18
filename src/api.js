import { API_KEY } from "./keys";

export const searchCities = async (value) => {
    try {
        const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`,
            {
                method: 'GET',
                headers: {
                    "Access-Control-Request-Method": "GET",
                    "Access-Control-Request-Headers": "Content-Type, Accept",
                }
            }
        );
        const cities = await response.json();
        return cities;

    } catch (error) {
        console.log("Error fetching cities",error);
    }
};


export const forecastByDays = async (days, cityKey) => {
    try {
        const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/${days}day/${cityKey}?apikey=${API_KEY}`,
            {
                method: 'GET',
                headers: {
                    "Access-Control-Request-Method": "GET",
                    "Access-Control-Request-Headers": "Content-Type, Accept",
                }
            }
        );
        const forecast = await response.json();
        return forecast;

    } catch (error) {
        console.log("Error fetching weather details",error);
    }
};