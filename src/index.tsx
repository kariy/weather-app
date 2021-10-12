import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ContextProvider from './contexts';

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
