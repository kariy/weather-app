import { createContext, useState } from 'react';
import styled from 'styled-components';
import DailyContainer from './daily/DailyContainer';
import ForecastContainer from './ForecastContainer';
import HourylyContainer from './hourly/HourlyContainer';
import RealtimeContainer from './realtime/RealtimeContainer';
import SearchBarContainer from './search-bar/SearchBarContainer';

const Container = styled.div`
	width: min(90%, 810px);
	min-width: 320px;
	margin: 30px auto;
`;

const Line = styled.div`
	height: 1px;
	background: var(--medium-black);
	margin: 35px 0;
`;

function App() {
	return (
		<Container>
			<SearchBarContainer />
			<RealtimeContainer />
			<Line />
			<ForecastContainer>
				<DailyContainer />
				<HourylyContainer />
			</ForecastContainer>
		</Container>
	);
}

export default App;
