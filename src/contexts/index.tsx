import LocationProvider from './LocationContext';
import WeatherContextProvider from './WeatherContext';

const ContextProvider: React.FC = ({ children }) => {
	return (
		<LocationProvider>
			<WeatherContextProvider>{children}</WeatherContextProvider>
		</LocationProvider>
	);
};

export default ContextProvider;
