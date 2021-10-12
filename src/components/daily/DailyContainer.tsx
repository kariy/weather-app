import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { WeatherStateContext } from '../../contexts/WeatherContext';
import { SelectedDayContext } from '../ForecastContainer';
import BigLoader from '../loader/BigLoader';
import DailyCardContainer from './DailyCardContainer';

const Container = styled.div`
	display: grid;
	row-gap: 10px;

	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(auto-fit, 259px);

		column-gap: 16.5px;
		row-gap: 15px;
	}
`;

export default function DailyContainer() {
	const weather = useContext(WeatherStateContext);
	const selected = useContext(SelectedDayContext);

	return (
		<Container>
			{weather?.data && selected ? (
				weather.data.forecast.forecastday.map((day, index) => (
					<DailyCardContainer
						dayIndex={index}
						forecastDay={day}
						key={day.date}
						onSelectDay={() => selected.dispatch(index)}
					/>
				))
			) : (
				<>
					<DailyCardContainer loader={() => <BigLoader />} />
					<DailyCardContainer loader={() => <BigLoader />} />
					<DailyCardContainer loader={() => <BigLoader />} />
				</>
			)}
		</Container>
	);
}
