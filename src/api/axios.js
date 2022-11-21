import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: 'b14257c906029efcdcfb8783b8cf0e51',
		language: 'ko-KR',
	},
});

export default instance;
