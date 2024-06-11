import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from './RootLayout.module.scss'

function RootLayout() {
	return (
		<>
			<MainNavigation />
			<main className={classes.main}>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
