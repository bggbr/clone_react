import React from 'react';

const MovieModal = ({ movie, setModalOpen }) => {
	return (
		// <div className='w-screen h-screen'>
		// <div className='fixed top-1/8 left-20 bg-yellow-500 m-20 w-3/4 h-[1000px] z-40'>1234</div>
		// </div>
		<div className='z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
			<div className='wrapper-modal pt-2 flex justify-center'>
				<div className='modal relative max-w-[800px] bg-black rounded-lg'>
					<span
						className='modal-close text-white absolute top-1 right-4 text-2xl cursor-pointer'
						onClick={() => setModalOpen(false)}
					>
						{'x'}
					</span>
					<img
						src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
						alt='modal__poster-img'
						className='w-100% h-100%'
					/>

					<div className='modal__content p-10 text-white'>
						<p className='modal__details block mb-1'>
							<span className='modal__user_perc text-green-500 font-bold pr-1 w-full'>100% for you</span>
							{movie.release_date ? movie.release_date : movie.first_air_date}
						</p>
						<h2 className='modal__title text-2xl font-bold mb-1'> {movie.title ? movie.title : movie.name}</h2>
						<p className='modal__overview block mb-1'>평점: {movie.vote_average}</p>
						<p className='modal__overview'>{movie.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieModal;

// backdrop_path,
// first_air_date,
// genre_ids,
// id,
// name,
// origin_country,
// original_language,
// original_name,
// overview,
// popularity,
// poster_path,
// vote_average,
// vote_count,
// setModalOpen,
