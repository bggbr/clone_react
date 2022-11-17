import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

export default function Row({ isLargeRow, title, id, fetchUrl }) {
	const [movies, setMovies] = useState([]);
	const [arrow, setArrow] = useState(false);

	async function fetchMovieData() {
		const request = await axios.get(fetchUrl);
		setMovies(request.data.results);
	}

	const rowImages = useRef([]);

	useEffect(() => {
		fetchMovieData();
		console.log(movies);
	}, []);

	return (
		<div className='bg-black relative'>
			<h1 className='text-white text-2xl font-bold ml-10 pt-4'>{title}</h1>
			<span
				className={'flex text-[25px] z-50 absolute top-44 left-4 cursor-pointer text-white '}
				onClick={() => (document.getElementById(id).scrollLeft -= window.innerWidth - 80)}
			>
				{'<'}
			</span>
			<div
				id={id}
				className='relative w-full h-[20rem] flex overflow-hidden px-10 py-4 bg-black'
				onMouseOver={() => setArrow(true)}
				onMouseLeave={() => setArrow(false)}
			>
				{movies.map((movie, index) => (
					<div className='flex-1 mr-8 transition duration-500 hover:scale-105' key={movie.id}>
						<img className='h-full ' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='img' />
					</div>
				))}
			</div>
			<span
				className={'flex text-[25px] z-50 absolute top-44 right-4 cursor-pointer text-white '}
				onClick={() => (document.getElementById(id).scrollLeft += window.innerWidth - 80)}
			>
				{'>'}
			</span>
		</div>
	);
}
