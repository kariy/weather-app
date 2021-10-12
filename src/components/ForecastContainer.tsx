import { createContext, Dispatch, useEffect, useState } from 'react';

export const SelectedDayContext = createContext<{
	index: number;
	dispatch: Dispatch<React.SetStateAction<number>>;
} | null>(null);

const ForecastContainer: React.FC = ({ children }) => {
	const [selectedtDay, setSelectedDay] = useState<number>(0);

	return (
		<SelectedDayContext.Provider
			value={{ index: selectedtDay, dispatch: setSelectedDay }}
		>
			{children}
		</SelectedDayContext.Provider>
	);
};

export default ForecastContainer;
