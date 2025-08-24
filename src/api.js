export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
	}
};

export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
export const weather_API_URL=process.env.REACT_APP_WEATHER_API_URL;
export const weather_API_KEY=process.env.REACT_APP_WEATHER_API_KEY;