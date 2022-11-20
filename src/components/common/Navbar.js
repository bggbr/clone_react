import React, { useState, useEffect } from 'react';

function Navbar() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 160) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	return (
		<nav className={'z-50 fixed top-0 w-full h-20 ' + (show ? 'bg-black' : 'bg-transparent')}>
			<div className='flex h-full justify-between'>
				<div className='flex justify-center items-center ml-12'>
					<img
						className='block h-10 cursor-pointer'
						src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
						alt='icon'
						onClick={() => window.location.reload()}
					/>
				</div>
				<div className='flex justify-center items-center'>
					<input
						type='text'
						placeholder='search movie'
						className='bg-black p-1 rounded-l focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500'
					/>
				</div>
				<div className='flex justify-center items-center mr-12'>
					<img
						className='block h-12 cursor-pointer'
						src='/assets/icon/netflix_user.jpg'
						alt='icon'
						onClick={() => window.location.reload()}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
