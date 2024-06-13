import { Suspense } from 'react'
import AnimeInfo from './AnimeInfo'
import { Await, useRouteLoaderData } from 'react-router-dom'

export default function Anime() {
	const { anime } = useRouteLoaderData('anime_info')

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Await resolve={anime}>{animeArr => <AnimeInfo results={animeArr.results} />}</Await>
		</Suspense>
	)
}
