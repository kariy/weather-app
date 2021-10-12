import { createContext } from 'react';
import useWeather, { WeatherReducerState } from '../hooks/useWeather';

export const WeatherStateContext = createContext<WeatherReducerState | null>(
	null
);

const WeatherContextProvider: React.FC = ({ children }) => {
	const { data, isLoading, isError, error } = useWeather();

	return (
		<WeatherStateContext.Provider
			value={{ data, isLoading, isError, error }}
		>
			{children}
		</WeatherStateContext.Provider>
	);
};

export default WeatherContextProvider;
