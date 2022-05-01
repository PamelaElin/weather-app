
	import axios from "axios";
	
	export const getWeather = async (location) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
        const response = await axios.get(url);
				return (response.data);
 	
		
   };