import { createContext } from 'react';

const THEME = {
	LIGHT: {},
	DARK: {},
};

const ThemeContext = createContext(null);

const ThemeContextProvider: React.FC = ({ children }) => {
	return (
		<ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
