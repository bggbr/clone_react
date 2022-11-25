import React, { useEffect, useState } from 'react';
import MovieModal from './common/MovieModal';
import axios from '../api/axios';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row({ isLargeRow, title, id, fetchUrl }) {
	const [movies, setMovies] = useState([]);
	const [arrow, setArrow] = useState(false);
	const [ModalOpen, setModalOpen] = useState(false);
	const [movieSelected, setMovieSelected] = useState({});

	async function fetchMovieData() {
		const request = await axios.get(fetchUrl);
		setMovies(request.data.results);
	}

	const handleClick = (movie) => {
		setModalOpen(true);
		setMovieSelected(movie);
	};

	useEffect(() => {
		fetchMovieData();
	}, []);

	return (
		<div className='bg-black relative'>
			<h1 className='block text-white text-2xl font-bold mx-10 py-4'>{title}</h1>
			<Swiper
				className='mx-10'
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				loop={true}
				// pagination={{ clickable: true }}
				breakpoints={{
					1378: {
						slidesPerView: 6,
						slidesPerGroup: 6,
					},
					998: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					625: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					0: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
				}}
				onSlideChange={() => console.log('slide change')}
			>
				<div
					id={id}
					className='relative w-full h-[20rem] flex overflow-hidden bg-black'
					// onMouseOver={() => setArrow(true)}
					// onMouseLeave={() => setArrow(false)}
				>
					{movies.map((movie) => (
						<SwiperSlide>
							<div className='flex-1 mr-8 transition duration-500 hover:scale-110'>
								<img
									key={movie.id}
									className='h-full cursor-pointer'
									src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
									alt='img'
									onClick={() => handleClick(movie)}
								/>
							</div>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
			{ModalOpen && (
				<MovieModal
					movie={{ ...movieSelected }} //
					setModalOpen={setModalOpen}
				/>
			)}
		</div>
	);
}
