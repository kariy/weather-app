import { useContext } from 'react';
import styled from 'styled-components';
import { DailyData } from '../../types/weatherTypes';
import { toDateString } from '../../utils';

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;

	@media screen and (min-width: 600px) {
		flex-direction: column;
	}
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	.date {
		margin-bottom: 10px;
	}

	.condition {
		display: flex;
		align-items: center;
		font-size: 1.13rem;
		font-weight: 700;
	}

	.condition .icon {
		margin-right: 15px;
	}

	&:last-child {
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		div {
			display: flex;
			align-items: center;
		}

		.icon {
			margin-right: 10px;
		}

		@media screen and (min-width: 600px) {
			flex-direction: row;
			margin-top: 18px;
			justify-content: unset;

			div:first-child {
				margin-right: 20px;
			}
		}
	}
`;

interface Props {
	daily: DailyData;
	date: string;
}

export default function DailyCard({ daily, date }: Props) {
	return (
		<Container>
			<Wrapper>
				<div className="date">{toDateString(date)}</div>
				<div className="condition">
					<img
						src={daily.condition.icon}
						className="icon"
						alt={`${daily.condition.text} icon`}
						width="36"
					/>
					<span className="text">{daily.condition.text}</span>
				</div>
			</Wrapper>
			<Wrapper>
				<div>
					<img
						src="/hot.svg"
						alt="temperature icon"
						className="icon"
						height="25"
						title="Average temperature"
					/>
					<span>{daily.avgtemp_c}°C</span>
				</div>
				<div>
					<img
						src="/humidity.png"
						alt="humidity icon"
						className="icon"
						height="20"
						title="Rain possibility"
					/>
					<span>{daily.avghumidity}%</span>
				</div>
			</Wrapper>
		</Container>
	);
}
