import { useEffect, useState } from 'react';

const DEFAULT_LOCATION = 'Kuala Lumpur';

export default function useLocation() {
	const [location, setLocation] = useState<string>(DEFAULT_LOCATION);

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				const coordStr = `${coords.latitude},${coords.longitude}`;
				setLocation(coordStr);
			});
		}
	}, []);

	return { location, setLocation };
}
