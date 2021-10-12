import styled from 'styled-components';
import { LocationData, RealtimeData } from '../../types/weatherTypes';
import { getUSEPAText, getUVIndexText } from '../../utils';

const Container = styled.div`
	display: flex;
	flex-flow: column;
	row-gap: 20px;

	.weather-icon {
		width: 40px;
		margin-right: 10px;
	}

	& > div:first-child {
		/* background-color: green; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 210px;
	}

	& > div:last-child {
		/* background-color: yellow; */
		align-self: center;

		display: flex;
		flex-flow: row wrap;
		column-gap: 20px;
		row-gap: 13px;
	}

	@media screen and (min-width: 740px) {
		& {
			flex-flow: row;
		}

		& > div:first-child {
			flex: 1;
		}

		& > div:last-child {
			justify-self: flex-end;
			justify-content: unset;
			column-gap: 20px;
			max-width: 360px;
		}
	}
`;

const SubInfo = styled.div`
	width: 170px;
	background: #ebebeb;
	padding: 0.6rem 0.85rem;
	border-radius: 0.6rem;
	font-size: 1rem;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 487px) {
		& {
			width: 100%;
		}
	}

	.title {
		font-weight: 700;
	}
`;

interface Props {
	current: RealtimeData;
	location: LocationData;
}

export default function Realtime({ current, location }: Props) {
	return (
		<Container>
			<div>
				<div>
					<div
						style={{
							fontSize: '1.06rem',
							fontWeight: 500,
							marginBottom: '15px',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<img
							className="weather-icon"
							src={current.condition.icon}
							alt={`${current.condition.icon} icon`}
						/>
						<span>{current.condition.text}</span>
					</div>
					<div>
						<div style={{ fontWeight: 700, fontSize: '3.33rem' }}>
							<span>{current.temp_c}</span>
							<span>°C</span>
						</div>
						<div>
							Feels like <span>{current.feelslike_c}</span>
							<span>°C</span>
						</div>
					</div>
				</div>
				<div style={{ display: 'flex', alignContent: 'center' }}>
					<svg
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.49935 9.49992C10.3702 9.49992 11.0827 8.78742 11.0827 7.91659C11.0827 7.04575 10.3702 6.33325 9.49935 6.33325C8.62852 6.33325 7.91602 7.04575 7.91602 7.91659C7.91602 8.78742 8.62852 9.49992 9.49935 9.49992ZM9.49935 1.58325C12.8243 1.58325 15.8327 4.13242 15.8327 8.07492C15.8327 10.5924 13.8931 13.5533 10.0218 16.9653C9.72101 17.2266 9.26977 17.2266 8.96893 16.9653C5.1056 13.5533 3.16602 10.5924 3.16602 8.07492C3.16602 4.13242 6.17435 1.58325 9.49935 1.58325Z"
							fill="#323232"
						/>
					</svg>
					<span
						style={{
							fontSize: '0.9rem',
							fontWeight: 500,
							marginLeft: '8px',
						}}
					>
						{`${location.name}, ${location.region}, ${location.country}`}
					</span>
				</div>
			</div>
			<div>
				<SubInfo>
					<span className="title">Pressure</span>
					<span>{current.pressure_mb}mb</span>
				</SubInfo>
				<SubInfo>
					<span className="title">Cloud</span>
					<span>{current.cloud}%</span>
				</SubInfo>
				<SubInfo>
					<span className="title">Humidity</span>
					<span>{current.humidity}%</span>
				</SubInfo>
				<SubInfo>
					<span className="title">Wind</span>
					<span>{current.wind_kph} km/h</span>
				</SubInfo>
				<SubInfo>
					<span className="title">AQI</span>
					<span>
						{getUSEPAText(current.air_quality['us-epa-index'])}
					</span>
				</SubInfo>
				<SubInfo>
					<span className="title">UV</span>
					<span>{getUVIndexText(current.uv)}</span>
				</SubInfo>
			</div>
		</Container>
	);
}
