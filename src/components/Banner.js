import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [bannerUrl, setBannerUrl] = useState('');
	const [title, setTitle] = useState('');
	const [overview, setOverview] = useState('');
	// const [isClicked, setIsClicked] = useState(false);
	console.log(movie);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		// 현재 상영중인 영화 정보를 가져오기(여러 영화)
		const request = await axios.get(requests.fetchNowPlaying);

		// 여러 영화 중 영화 하나의 ID를 가져오기
		const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

		// 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
		const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
			params: { append_to_response: 'videos' },
		});
		setMovie(movieDetail);
		setBannerUrl(`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`);
		setTitle(movieDetail.title);
		setOverview(movieDetail.overview.length > 200 ? movieDetail.overview.substr(0, 199) + '...' : movieDetail.overview);
	};

	return (
		<div className='w-full h-[48rem]'>
			<div
				style={{
					backgroundImage: `url(${bannerUrl})`,
					backgroundPosition: 'top center',
					backgroundSize: 'cover',
					height: '100%',
				}}
			>
				{/* <h1 className='absolute top-10 left-10 w-10 h-10 text-white-100'>{movie.name}</h1> */}
			</div>
			<h1 className='absolute bottom-[400px] left-10 w-100 h-100 text-white text-5xl font-bold'>{title}</h1>
			<div className='absolute bottom-[350px] left-10 text-white '>
				<button>Play</button>
				<button>More Information</button>
			</div>
			<span className='absolute bottom-[150px] left-10 w-[500px] h-100 text-white text-xl font-bold text-ellipsis'>{overview}</span>
		</div>
	);
};
// https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg
// https://image.tmdb.org/t/p/original
export default Banner;
