import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Photos from './pages/Photos'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'photos', element: <Photos /> },
			],
		},
	])
	return <RouterProvider router={router} />
}

export default App
