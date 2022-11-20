import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Row from '../../components/Row';
import requests from '../../api/requests';

function MainPage() {
	return (
		<div className='w-screen h-full relative'>
			<Banner />
			<Row
				title='NETFLIX ORIGINALS' //
				id='NO'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row
				title='Trending Now' //
				id='TN'
				fetchUrl={requests.fetchTrending}
				isLargeRow
			/>
			<Row
				title='Top Rated' //
				id='TR'
				fetchUrl={requests.fetchTopRated}
				isLargeRow
			/>
			<Row
				title='Action Movies' //
				id='AM'
				fetchUrl={requests.fetchActionMovies}
				isLargeRow
			/>
			<Row
				title='Comedy Movies' //
				id='CM'
				fetchUrl={requests.fetchComedyMovies}
				isLargeRow
			/>
		</div>
	);
}

export default MainPage;
