export function getUrlParsebleString(str: string): String {
	const arr = str.split(' ');

	if (arr.length === 1) return str;

	return arr.join('+');
}

export function getUVIndexText(index: number): string {
	if (index >= 0 && index <= 2) return 'Low';
	else if (index >= 3 && index <= 5) return 'Moderate';
	else if (index >= 6 && index <= 7) return 'High';
	else if (index >= 8 && index <= 10) return 'Very High';
	else return 'Unknown';
}

export function getUSEPAText(index: number): string {
	if (index === 1) return 'Good';
	else if (index === 2) return 'Moderate';
	else if (index === 3 || index === 4) return 'Unhealty';
	else if (index === 5) return 'Very Unhealty';
	else if (index === 6) return 'Hazardous';
	else return 'Unknown';
}

export function getHourFromDate(dateStr: string): number {
	const date = new Date(dateStr);
	return date.getHours();
}

function getMonthName(month: number): string {
	switch (month) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'Jun';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
		default:
			return '';
	}
}

function getDayName(day: number): string {
	switch (day) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		default:
			return '';
	}
}

export function toDateString(dateStr: string) {
	const date = new Date(dateStr);
	const monthName = getMonthName(date.getMonth());
	const dayInMonth = date.getDate();
	const dayName = getDayName(date.getDay());

	const fullStr = `${dayName.slice(0, 3)}, ${dayInMonth} ${monthName}`;

	return fullStr;
}
