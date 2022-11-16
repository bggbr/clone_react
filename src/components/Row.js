import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

export default function Row() {
	// const [movie, setMovie] = useState([]);
	const [bannerUrl, setBannerUrl] = useState('');
	const [arrow, setArrow] = useState(false);
	const [test, setTest] = useState([]);

	async function fetchMovieGenre() {
		const test = await axios.get(requests.fetchTrending);
		// console.log(test.data);
		// setMovie(test.data.results);
		// setTest(`https://image.tmdb.org/t/p/original/${test.data.results[5].backdrop_path}`);
		setBannerUrl(`https://image.tmdb.org/t/p/original/${test.data.results[5].backdrop_path}`);
	}

	async function fetchTest() {
		const test = await axios.get(requests.fetchTrending);
		const array = [];
		for (let url of test.data.results) {
			// console.log(url.backdrop_path);
			array.push(`https://image.tmdb.org/t/p/original/${url.backdrop_path}`);
		}
		setTest([...array]);
	}

	const image = useRef();
	const ttt = useRef([]);

	const createArrow = () => {
		// console.log(arrow);
		setArrow(true);
	};

	const removeArrow = () => {
		// console.log(arrow);
		setArrow(false);
	};

	const slideRight = () => {
		console.log('clicked');
	};

	useEffect(() => {
		fetchMovieGenre();
		fetchTest();
		setTimeout(() => {
			console.log(ttt);
		}, 1000);
	}, []);

	fetchMovieGenre();
	return (
		<>
			<div className='relative w-full h-[12rem] flex overflow-hidden' onMouseOver={createArrow} onMouseLeave={removeArrow}>
				{test.map((v, i) => (
					<div className='inline-block flex-1 w-50 h-full m-1'>
						<img
							className='w-10 h-10'
							src={v}
							alt='img'
							ref={(el) => {
								ttt.current[i] = el;
							}}
						/>
					</div>
				))}
				{/* <img
					className={'w-10 h-10 absolute top-20 cursor-pointer ' + (arrow ? ' ' : ' hidden')}
					src='/assets/icon/left-arrow.png'
					alt='left'
				/> */}
				{/* <div className='inline-block flex-1 w-50 h-full m-1 bg-green-500'></div>
			<div className='inline-block flex-1 w-50 h-full m-1 bg-red-500'></div>
			<div className='inline-block flex-1 w-50 h-full m-1 bg-blue-500'></div>
			<div className='inline-block flex-1 w-50 h-full m-1 bg-yellow-500'></div> */}
				{/* <div className='inline-block flex-1 w-50 h-full m-1'>
					<img className='block h-full hover:h-60' ref={image} src={bannerUrl} alt='test' />
				</div>
				<div className='inline-block flex-1 w-50 h-full m-1'>
					<img className='block h-full hover:h-60' ref={image} src={bannerUrl} alt='test' />
				</div>
				<div className='inline-block flex-1  w-50 h-full m-1'>
					<img className='block h-full hover:h-60' ref={image} src={bannerUrl} alt='test' />
				</div>
				<div className='inline-block flex-1  w-50 h-full m-1'>
					<img className='block h-full hover:h-60' ref={image} src={bannerUrl} alt='test' />
				</div>
				<div className='inline-block flex-1  w-50 h-full m-1'>
					<img className='block h-full hover:h-60' ref={image} src={bannerUrl} alt='test' />
				</div>
				<img
					className={'w-10 h-10 absolute top-20 right-0 cursor-pointer ' + (arrow ? ' ' : ' hidden')}
					src='/assets/icon/right-arrow.png'
					alt='right'
					onClick={slideRight}
				/> */}
			</div>
			{/* <div className='flex flex-nowrap overflow-hidden '>
				// <div className='w-[500px] h-full bg-green-500 m-10'>test</div>
				// <div className='w-[500px] h-full bg-yellow-500 m-10'>test</div>
				// <div className='w-[500px] h-full bg-red-500 m-10'>test</div>
				// <div className='w-[500px] h-full bg-blue-500 m-10'>test</div>
				// <div className='w-[500px] h-full bg-black m-10'>test</div>
			</div> */}
		</>
	);
}
