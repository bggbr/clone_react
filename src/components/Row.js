import React, { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

export default function Row() {
    // const [movie, setMovie] = useState([]);
    const [bannerUrl, setBannerUrl] = useState('');
    const [arrow, setArrow] = useState(false);
    const [test, setTest] = useState([]);

    async function fetchMovieGenre() {
        const test = await axios.get(requests.fetchTrending);
        // console.log(test.data);
        // setMovie(test.data.results);
        // setTest(`https://image.tmdb.org/t/p/original/${test.data.results[5].backdrop_path}`);
        setBannerUrl(`https://image.tmdb.org/t/p/original/${test.data.results[5].backdrop_path}`);
    }

    async function fetchTest() {
        const test = await axios.get(requests.fetchTrending);
        const array = [];
        for (let url of test.data.results) {
            // console.log(url.backdrop_path);
            array.push(`https://image.tmdb.org/t/p/original/${url.backdrop_path}`);
        }
        setTest([...array]);
    }

    const index = useRef(0);
    const rowImages = useRef([]);
    const show = 'flex-1 mr-8 transition duration-500 hover:scale-105';
    const hide = 'hidden flex-0 mr-8 transition duration-500 hover:scale-105';

    const createArrow = () => {
        setArrow(true);
    };

    const removeArrow = () => {
        setArrow(false);
    };

    const slideRight = () => {
        if (index.current > 18) return;
        rowImages.current[index.current].className = hide;
        index.current++;
        console.log(index.current);
    };

    const slideLeft = () => {
        if (index.current < 1) return;
        rowImages.current[index.current].className = show;
        index.current--;
        console.log(index.current);
    };

    useEffect(() => {
        fetchMovieGenre();
        fetchTest();
    }, []);

    fetchMovieGenre();

    return (
        <div className="relative w-full h-[20rem] flex overflow-hidden p-10 bg-black" onMouseOver={createArrow} onMouseLeave={removeArrow}>
            <img className={'w-8 h-12 z-50 rotate-180 absolute top-36 cursor-pointer ' + (arrow ? '' : 'hidden')} src="/assets/icon/right-arrow.png" alt="left" onClick={slideLeft} />

            {test.map((v, i) => (
                <div
                    className="flex-1 mr-8 transition duration-500 hover:scale-105"
                    key={i}
                    ref={(el) => {
                        rowImages.current[i] = el;
                    }}
                >
                    <img className="h-full " src={v} alt="img" />
                </div>
            ))}

            <img className={'w-8 h-12 z-50  absolute top-36 right-12 cursor-pointer ' + (arrow ? '' : 'hidden')} src="/assets/icon/right-arrow.png" alt="right" onClick={slideRight} />
        </div>
    );
}
