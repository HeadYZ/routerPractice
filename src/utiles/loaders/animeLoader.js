export default async function animeLoader() {
	const response = await fetch('https://nekos.best/api/v2/hug?amount=6')

	return response
}
