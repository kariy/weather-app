import { useEffect, useReducer } from 'react';
import { useLocationState } from '../contexts/LocationContext';
import { WeatherResponseData } from '../types/weatherTypes';
import { getWeather } from '../utils/getWeather';

export interface WeatherReducerState {
	data: WeatherResponseData | null;
	isLoading: boolean;
	isError: boolean;
	error: any;
}

const initState: WeatherReducerState = {
	data: null,
	isError: false,
	error: null,
	isLoading: false,
};

function reducer(state: WeatherReducerState, action: any) {
	switch (action.type) {
		case 'success':
			return {
				...state,
				data: action.payload.data,
				isLoading: false,
				isError: false,
				error: null,
			};

		case 'error':
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload.error,
			};

		case 'loading':
			return { ...state, isLoading: true };

		default:
			return { ...state };
	}
}

export default function useWeather() {
	const location = useLocationState();
	const [state, dispatch] = useReducer(reducer, initState);

	useEffect(() => {
		if (!state.data) {
			console.log('first time');

			dispatch({ type: 'loading' });
		}
	}, [state.data]);

	useEffect(() => {
		if (location) {
			getWeather({ query: location, days: 3, aqi: 'yes' })
				.then((data) => {
					if (data.location) {
						dispatch({ type: 'success', payload: { data } });
					}
				})
				.catch((error) =>
					dispatch({ type: 'error', payload: { error } })
				);
		}
	}, [location]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		isError: state.isError,
		error: state.error,
	};
}
