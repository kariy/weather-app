import { useContext } from 'react';
import styled from 'styled-components';
import { WeatherStateContext } from '../../contexts/WeatherContext';
import BigLoader from '../loader/BigLoader';
import Realtime from './Realtime';

const Container = styled.div`
	min-height: 210px;
	margin-top: 35px;
	background-color: white;
	border: var(--border-light);
	border-radius: var(--rounded);
	padding: 2rem 2.5rem;
`;

export default function RealtimeContainer() {
	const weather = useContext(WeatherStateContext);

	return (
		<Container>
			{weather?.isLoading ? (
				<BigLoader />
			) : weather?.data ? (
				<Realtime
					current={weather.data.current}
					location={weather.data.location}
				/>
			) : (
				<div>An error has occurred</div>
			)}
		</Container>
	);
}
