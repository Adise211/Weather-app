
export const searchCities = async (value) => {
    try {
        const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.API_KEI}=${value}`);
        console.log("reponse fetch auto cities",response);    
    } catch (error) {
        console.log("Error fetching cities",error);
    }
};