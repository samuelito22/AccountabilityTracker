'use client';

import {useState} from 'react';

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
            navbar
        </div>






        </header>
    );
}

export default Header;