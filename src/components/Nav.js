import React from 'react';

const Nav = ({ selectedNavItem, setSelectedNavItem }) => {
	const handleNavClick = (event) => {
		const navItem = event.target.textContent;
		setSelectedNavItem(navItem);
	};

	return (
		<nav>
			<a
				className={`nav-item inline-block ${selectedNavItem === 'About' ? 'nav-active' : ''}`}
				data-testid="about"
				href="#about"
				onClick={handleNavClick}
			>
				About
			</a>
			<span
				className={`nav-item inline-block ${selectedNavItem === 'Portfolio' ? 'nav-active' : ''}`}
				data-testid="portfolio"
				onClick={handleNavClick}
			>
				Portfolio
			</span>
			<span
				className={`nav-item inline-block ${selectedNavItem === 'Resume' ? 'nav-active' : ''}`}
				onClick={handleNavClick}
			>
				Resume
			</span>
			<span
				className={`nav-item inline-block ${selectedNavItem === 'Contact' ? 'nav-active' : ''}`}
				onClick={handleNavClick}
			>
				Contact
			</span>
		</nav>
	);
};

export default Nav;