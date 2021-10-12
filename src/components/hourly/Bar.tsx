import styled, { keyframes } from 'styled-components';
import { HourlyData } from '../../types/weatherTypes';
import { getHourFromDate } from '../../utils';

const growVertically = (temp: number) => keyframes`
    from {
        height: 0
    }

    to {
        height:  calc(
			((${temp} - (-30)) / (70 - (-30))) * 100%
		);
    }
`;
const StyledBar = styled.div<{ temp: number; barColor: string }>`
	position: relative;
	padding-bottom: 10px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	border-radius: 15px;
	align-self: flex-end;
	background-color: ${(props) => props.barColor};
	animation-name: ${(props) => growVertically(props.temp)};
	animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	animation-duration: 1s;
	animation-fill-mode: forwards;
	height: 0;

	.temp {
		position: absolute;
		left: 0;
		right: 0;
		top: -30px;
		text-align: center;
	}

	img {
		width: 70%;
	}
`;

interface Props {
	hour: HourlyData;
}

export default function Bar({ hour }: Props) {
	return (
		<>
			<StyledBar temp={hour.temp_c} barColor={getBarColour(hour.time)}>
				<div className="temp">{hour.temp_c}°</div>
				<img
					src={`${hour.condition.icon}`}
					alt={`${hour.condition.text} icon`}
				/>
			</StyledBar>
			<div className="hour">{getHourElem(hour.time)}</div>
		</>
	);
}

function getHourElem(dateStr: string): JSX.Element {
	const hour = getHourFromDate(dateStr);
	let meridiem;

	if (hour >= 0 && hour < 12) meridiem = 'AM';
	else if (hour >= 12 && hour < 24) meridiem = 'PM';
	else meridiem = '?';

	return (
		<>
			<span>{hour}</span>
			<span>{meridiem}</span>
		</>
	);
}

function getBarColour(dateStr: string): string {
	const hour = getHourFromDate(dateStr);

	if (hour >= 19 && hour <= 23) return '#DEEDFF';
	else if (hour >= 0 && hour < 8) return '#DEEDFF';
	else if (hour >= 7 && hour < 19) return '#FFEBCE';
	else return '#EBEBEB';
}
