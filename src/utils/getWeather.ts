import { RequestParams } from '../types/requestTypes';
import { WEATHER_API_KEY } from './constants';

export async function getWeather(params: RequestParams) {
	try {
		const res = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${params.query}&days=${params.days}&aqi=${params.aqi}`
		);

		const data = await res.json();

		if (data.error) throw data.error;

		return data;
	} catch (err) {
		throw err;
	}
}
