import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const SearchPage = () => {
	const [searchResults, setSearchResult] = useState([]);
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};
	const searchTerm = useQuery().get('q');

	const fetchSearchMovie = async (searchTerm) => {
		try {
			const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
			setSearchResult(request.data.result);
		} catch (error) {
			console.log('error =', error);
		}
	};

	useEffect(() => {
		if (searchTerm) fetchSearchMovie();
	}, [searchTerm]);

	return <div>SearchPage</div>;
};

export default SearchPage;
