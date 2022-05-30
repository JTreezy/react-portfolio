import React from 'react';
import Nav from '../Nav';
import Logo from '../Logo';

const Header = ({ selectedNavItem, setSelectedNavItem }) => (
	<header className="site-header py-5">
		<Logo />
		<Nav
			selectedNavItem={selectedNavItem}
			setSelectedNavItem={setSelectedNavItem}
		/>
	</header>
);

export default Header;