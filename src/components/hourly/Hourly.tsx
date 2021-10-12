import { RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ForecastDayData } from '../../types/weatherTypes';
import { getHourFromDate, toDateString } from '../../utils';
import Bar from './Bar';

const Wrapper = styled.div`
	.section-title {
		font-weight: 500;
		margin-bottom: 15px;
	}

	.date {
		font-size: 1.73rem;
		font-weight: 700;
	}
`;

const BarContainer = styled.div`
	margin-top: 30px;
	padding-bottom: 15px;
	display: grid;
	grid-template-rows: 300px 45px;
	grid-auto-columns: 45px;
	grid-auto-flow: column;
	column-gap: 8px;
	row-gap: 7px;
	overflow-x: scroll;

	.hour {
		font-weight: 300;
		align-self: center;

		span {
			text-align: center;
			display: block;
		}
	}
`;

interface Props {
	data: ForecastDayData;
}

export default function Hourly({ data }: Props) {
	return (
		<Wrapper>
			<div>
				<div className="section-title">Hourly Forecast</div>
				<div className="date">{toDateString(data.date)}</div>
			</div>
			<BarContainer key={data.date}>
				{data.hour.map((hour) => (
					<Bar hour={hour} />
				))}
			</BarContainer>
		</Wrapper>
	);
}
