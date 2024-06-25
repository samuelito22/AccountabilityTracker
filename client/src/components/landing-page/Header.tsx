'use client';

import {useState} from 'react';
import NavLinks from './NavLinks';
import UserMenu from './UserMenu';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <header className="font-plex font-semibold p-4 md:p-6 flex justify-between items-center">
        {/* Mobile View */}

        



        {/* Desktop View */}

        <div className="hidden md:flex w-full justify-between">
            <NavLinks/>
            <UserMenu/>
        </div>

        </header>
    );
}

export default Header;