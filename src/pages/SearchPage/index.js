import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const SearchPage = () => {
	const [searchResult, setSearchResult] = useState([]);

	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let query = useQuery();
	const searchTerm = query.get('q');

	const fetchSearchMovie = async (searchTerm) => {
		try {
			const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
			setSearchResult(request.data.results);
		} catch (error) {
			console.log('error', error);
		}
	};

	useEffect(() => {
		if (searchTerm) fetchSearchMovie(searchTerm);
	}, [searchTerm]);

	const renderSearchResults = () => {
		return searchResult.length > 0 ? (
			<section className='search-container h-full bg-black flex flex-wrap justify-center mt-20'>
				{searchResult.map((movie) => {
					if (movie.backdrop_path !== null && movie.media_type !== 'person') {
						const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
						return (
							<div className='movie p-4' key={movie.id}>
								<div className='movie__column-poster'>
									<img src={movieImageUrl} alt='movieImage' className='movie__poster' />
								</div>
							</div>
						);
					}
				})}
			</section>
		) : (
			<section className='no-results'>
				<div className='no-results__text'>
					<p>찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.</p>
				</div>
			</section>
		);
	};

	return renderSearchResults();
};

export default SearchPage;
