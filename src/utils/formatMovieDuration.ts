export const formatMovieDuration = (minutes: number): string => {
	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60

	return `${hours}h ${remainingMinutes}m`.replace("0h ", "")
}
