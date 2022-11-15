import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

export default function Row() {
    const [movie, setMovie] = useState([]);
    const [bannerUrl, setBannerUrl] = useState('');
    const [arrow, setArrow] = useState(false);

    async function fetchMovieGenre() {
        const test = await axios.get(requests.fetchTrending);
        console.log(test.data);
        // setMovie(test.data.results);
        setBannerUrl(`https://image.tmdb.org/t/p/original/${test.data.results[1].backdrop_path}`);
    }

    const image = useRef();

    const createArrow = () => {
        console.log(arrow);
        setArrow(true);
    };

    const removeArrow = () => {
        console.log(arrow);
        setArrow(false);
    };

    useEffect(() => {
        fetchMovieGenre();
    }, []);

    fetchMovieGenre();
    return (
        <div className="relative flex h-[12rem] mx-10 my-20 " onMouseOver={createArrow} onMouseLeave={removeArrow}>
            <img className={'w-10 h-10 absolute top-20 cursor-pointer ' + (arrow ? ' ' : ' hidden')} src="/assets/icon/left-arrow.png" alt="left" />
            <div className="w-50 h-full m-1">
                <img className="w-50 h-full hover:h-60" ref={image} src={bannerUrl} alt="test" />
            </div>
            <div className="w-50 h-full m-1">
                <img className="w-50 h-full hover:h-60" ref={image} src={bannerUrl} alt="test" />
            </div>
            <div className="w-50 h-full m-1">
                <img className="w-50 h-full hover:h-60" ref={image} src={bannerUrl} alt="test" />
            </div>
            <div className="w-50 h-full m-1">
                <img className="w-50 h-full hover:h-60" ref={image} src={bannerUrl} alt="test" />
            </div>
            <div className="w-50 h-full m-1">
                <img className="w-50 h-full hover:h-60" ref={image} src={bannerUrl} alt="test" />
            </div>
            <div className="w-50 h-full m-1">
                <img className="w-50 h-full hover:h-60" ref={image} src={bannerUrl} alt="test" />
            </div>
            <img className={'w-10 h-10 absolute top-20 right-0 cursor-pointer ' + (arrow ? ' ' : ' hidden')} src="/assets/icon/right-arrow.png" alt="right" />
        </div>
    );
}
