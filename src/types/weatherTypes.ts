export type LocationData = {
	name: string;
	region: string;
	country: string;
	lat: number;
	lon: number;
	localtime: string;
	localtime_epoch: string;
	tz_id: string;
};

export type AirQualityData = {
	co: number;
	o3: number;
	no2: number;
	so2: number;
	pm2_5: number;
	pm10: number;
	'us-epa-index': number;
};

type Condition = { text: string; icon: string; code: number };

export type RealtimeData = {
	last_updated: string;
	last_updated_epoch: number;
	temp_c: number;
	temp_f: number;
	feelslike_c: number;
	feelslike_f: number;
	condition: Condition;
	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	pressure_in: number;
	precip_mm: number;
	precip_in: number;
	humidity: number;
	cloud: number;
	is_day: number;
	uv: number;
	gust_mph: number;
	gust_kph: number;
	air_quality: AirQualityData;
};

type RealtimeNotInHourly =
	| 'last_updated'
	| 'last_updated_epoch'
	| 'air_quality'
	| 'gust_mph'
	| 'gust_kph'
	| 'uv';

export interface HourlyData extends Omit<RealtimeData, RealtimeNotInHourly> {
	time: string;
	time_epoch: number;
	condition: Condition;
	windchill_c: number;
	windchill_f: number;
	heatindex_c: number;
	heatindex_f: number;
	dewpoint_c: number;
	dewpoint_f: number;
	will_it_rain: number;
	will_it_snow: number;
	vis_km: number;
	vis_miles: number;
}

export type DailyData = {
	avgtemp_c: number;
	avghumidity: number;
	condition: Condition;
};

export type ForecastDayData = {
	astro: object;
	date: string;
	date_epoch: number;
	day: DailyData;
	hour: HourlyData[];
};

export interface WeatherResponseData {
	location: LocationData;
	current: RealtimeData;
	forecast: { forecastday: ForecastDayData[] };
}
