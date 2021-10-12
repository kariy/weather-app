import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherStateContext } from '../../contexts/WeatherContext';
import { SelectedDayContext } from '../ForecastContainer';
import BigLoader from '../loader/BigLoader';
import Hourly from './Hourly';

const Container = styled.div`
	min-height: 300px;
	margin-top: 20px;
	padding: 2rem 2.5rem;
	background: white;
	border-radius: var(--rounded);
	border: var(--border-light);
`;

export default function HourylyContainer() {
	const weather = useContext(WeatherStateContext);
	const day = useContext(SelectedDayContext);

	return (
		<Container>
			{weather?.data && day ? (
				<Hourly data={weather?.data.forecast.forecastday[day?.index]} />
			) : (
				<BigLoader />
			)}
		</Container>
	);
}
