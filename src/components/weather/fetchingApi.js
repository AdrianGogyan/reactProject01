import axios from 'axios';

const API_KEY = '59a39e665d419fb55568c387360d0762';

export const fetchWeatherData = async (city) => {
    if(!city) return;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        return response.data;
    } catch(error){
        throw new Error('Cd');
    }
};
