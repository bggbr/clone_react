import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [bannerUrl, setBannerUrl] = useState('');
	const [title, setTitle] = useState('');
	const [overview, setOverview] = useState('');

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
		<div className='w-full h-[48rem] relative'>
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
			<h1 className='absolute top-1/4 left-10 w-100 h-100 text-white text-5xl font-bold'>{title}</h1>
			<div className='absolute top-1/3 left-10 text-white flex'>
				<div className='w-20 flex justify-center bg-white px-1 py-2 text-black rounded-md mr-5'>
					<div className='flex justify-center items-center mr-1'>
						<img className='w-4 h-4 ' src='/assets/icon/play-arrow.png' alt='play' />
					</div>
					<span className='flex items-center font-bold'>Play</span>
				</div>
				<div className='w-30 flex justify-center bg-gray-500 px-5 py-2 text-white rounded-md'>
					<div className='flex justify-center items-center mr-2'>
						{/* <svg className="w-4 h-4  fill-white " src="/assets/icon/info.svg"></svg> */}
					</div>
					<span className='flex-col justify-center font-bold'>More Information</span>
				</div>
			</div>
			<span className='absolute bottom-1/3 left-10 w-[450px] h-100 text-white text-xl font-bold text-ellipsis'>{overview}</span>
		</div>
	);
};
export default Banner;
