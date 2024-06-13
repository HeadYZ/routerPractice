import { defer } from 'react-router-dom'

async function fetchAnime() {
	const response = await fetch('https://nekos.best/api/v2/hug?amount=6')
	const data = await response.json()
	return data
}

export default function animeLoader() {
	return defer({ anime: fetchAnime() })
}
