import classes from './Anime.module.scss'
export default function AnimeInfo({ results }) {
	console.log(results)
	return (
		<section className={classes.anime}>
			<h2 className={classes.anime__heading}>Popular animes</h2>
			<ul className={classes.anime__list}>
				{results.map(anime => (
					<li key={anime.anime_name} className={classes.anime__item}>
						<img src={anime.url} alt={anime.anime_name} className={classes['anime__item-img']} />
						<p>{anime.anime_name}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
