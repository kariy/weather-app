import { createContext, Dispatch, useContext } from 'react';
import useLocation from '../hooks/useLocation';

export const LocationStateContext = createContext<string | null>(null);

const LocationDispatchContext = createContext<Dispatch<any> | null>(null);

const LocationProvider: React.FC = ({ children }) => {
	const { location, setLocation } = useLocation();

	return (
		<LocationStateContext.Provider value={location}>
			<LocationDispatchContext.Provider value={setLocation}>
				{children}
			</LocationDispatchContext.Provider>
		</LocationStateContext.Provider>
	);
};

export const useLocationState = () => {
	const location = useContext(LocationStateContext);

	return location;
};

export const useLocationDispatch = () => {
	const dispatch = useContext(LocationDispatchContext);

	return dispatch;
};

export default LocationProvider;
