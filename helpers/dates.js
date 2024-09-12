export function getTodayHour() {
	let date = new Date();
	return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours() ];
}