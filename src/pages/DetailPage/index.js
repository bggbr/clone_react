import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
	const [searchResult, setSearchResult] = useState({});
	const [imageUrl, setImageUrl] = useState('');
	const params = useLocation().pathname;

	// searchResult.backdrop_path

	const fetchDetailImage = async () => {
		const request = await axios.get(`/movie/${params}`);
		setSearchResult(request.data);
		setImageUrl('https://image.tmdb.org/t/p/w500' + request.data.backdrop_path);
	};

	useEffect(() => {
		fetchDetailImage();
	}, []);

	return (
		<div>
			<img src={imageUrl} alt='imgae' className='w-full' />
		</div>
	);
};

export default DetailPage;
