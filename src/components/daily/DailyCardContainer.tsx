import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DailyData, ForecastDayData } from '../../types/weatherTypes';
import { SelectedDayContext } from '../ForecastContainer';
import DailyCard from './DailyCard';

const Container = styled.div<{ selected: boolean }>`
	min-height: 115px;
	background-color: white;
	border: var(--border-light);
	border-radius: var(--rounded);
	padding: 0.8rem 1.3rem;
	cursor: pointer;
	transform: ${(props) => (props.selected ? 'scale(1)' : 'scale(0.9)')};
	transition: transform 200ms ease-in-out;
`;

interface Props {
	dayIndex?: number;
	onSelectDay?: any;
	forecastDay?: ForecastDayData;
	loader?: any;
}

export default function DailyCardContainer({
	dayIndex,
	forecastDay,
	loader,
	onSelectDay,
}: Props) {
	const [isSelected, setIsSelected] = useState(false);
	const day = useContext(SelectedDayContext);

	useEffect(() => {
		setIsSelected(() => {
			if (dayIndex === day?.index) return true;
			return false;
		});
	}, [day]);

	return (
		<Container onClick={onSelectDay} selected={isSelected}>
			{forecastDay ? (
				<DailyCard daily={forecastDay.day} date={forecastDay.date} />
			) : (
				loader()
			)}
		</Container>
	);
}
