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