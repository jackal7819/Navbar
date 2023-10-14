import { links, social } from './data';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' className='logo' />
					<button className='nav-toggle' onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				{showLinks && (
					<div className='links-container'>
						<ul className='links'>
							{links.map((link) => (
								<li key={link.id}>
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
