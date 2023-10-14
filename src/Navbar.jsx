import { useRef } from 'react';
import { links, social } from './data';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksRef = useRef(null);
	const linksContainerRef = useRef(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	const linkStyles = {
		height: showLinks
			? `${linksRef.current.getBoundingClientRect().height}px`
			: 0,
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
				<div className='links-container' ref={linksContainerRef} style={linkStyles}>
					<ul className='links' ref={linksRef}>
						{links.map((link) => (
							<li key={link.id}>
								<a href={link.url}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
