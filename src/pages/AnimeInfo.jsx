import { useParams } from 'react-router-dom'

export default function AnimeInfo() {
	const params = useParams()
	return <h2>{params.animeId}</h2>
}
