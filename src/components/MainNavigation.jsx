import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.scss'
function MainNavigation() {
	return (
		<nav className={classes.nav}>
			<Link to='/' className={classes.nav__logo}>
				Kraso
			</Link>
			<ul className={classes.nav__list}>
				<li className={classes['nav__list-item']}>
					<NavLink to='/' className={({ isActive }) => (isActive ? classes.active : undefined)} end>
						Home
					</NavLink>
				</li>
				<li className={classes['nav__list-item']}>
					<NavLink to='/anime' className={({ isActive }) => (isActive ? classes.active : undefined)}>
						Anime
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default MainNavigation
