import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />}></Route>
					<Route path='/:movieId' element={<DetailPage />}></Route>
					<Route path='/search' element={<SearchPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
