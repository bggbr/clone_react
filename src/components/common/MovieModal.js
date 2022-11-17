import React from 'react';

const MovieModal = ({ movie, setModalOpen }) => {
	console.log(movie);

	return (
		// <div className='w-screen h-screen'>
		// <div className='fixed top-1/8 left-20 bg-yellow-500 m-20 w-3/4 h-[1000px] z-40'>1234</div>
		// </div>
		<div>
			<div className='wrapper-modal'>
				<div className='modal'>
					<span className='modal-close'>X</span>
					<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='modal__poster-img' />

					<div className='modal__content'>
						<p className='modal__details'>
							<span className='modal__user_perc'>100% for you</span>
							{movie.release_date ? movie.release_date : movie.first_air_date}
						</p>
						<h2 className='modal__title'> {movie.title ? movie.title : movie.name}</h2>
						<p className='modal__overview'>평점: {movie.vote_average}</p>
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
