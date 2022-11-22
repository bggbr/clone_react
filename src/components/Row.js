import React, { useEffect, useState } from 'react';
import MovieModal from './common/MovieModal';
import axios from '../api/axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

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
		<div className='bg-black relative flex'>
			<h1 className='text-white text-2xl font-bold ml-10 pt-4'>{title}</h1>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
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
				// spaceBetween={0}
				// slidesPerView={3}
				// scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				<div
					id={id}
					className='relative w-full h-[20rem] flex overflow-hidden px-10 py-4 bg-black'
					onMouseOver={() => setArrow(true)}
					onMouseLeave={() => setArrow(false)}
				>
					{movies.map((movie) => (
						<SwiperSlide key={movie.id}>
							<div className='flex-1 mr-8 transition duration-500 hover:scale-105'>
								<img
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
