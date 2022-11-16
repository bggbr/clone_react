import React from 'react';
import Navbar from './components/common/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
	return (
		<div className='w-screen h-full relative'>
			<Navbar />
			<Banner />
			<Row />
		</div>
	);
}

export default App;
