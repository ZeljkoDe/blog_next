import React from 'react';
import Link from 'next/link';

const NavBar = () => {
	return <nav className='navbar'>
		<div className="container">
			<Link href='/'>
				<a className='navbar__title'>Blog Posts</a>
			</Link>

			<ul>
				<li>
					<Link href='/posts'>
						<a>All posts</a>
					</Link>
				</li>
			</ul>
		</div>
	</nav>;
};

export default NavBar;
