import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Anime from './pages/Anime'
import animeLoader from './utiles/loaders/animeLoader.js'
import AnimeInfo from './pages/AnimeInfo.jsx'
function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'anime', element: <Anime />, loader: animeLoader },
				{ path: 'anime/:animeId', element: <AnimeInfo /> },
			],
		},
	])
	return <RouterProvider router={router} />
}

export default App
