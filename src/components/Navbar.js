import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    // to close the navbar on mobile
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);


  return (
    <div>
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button onClick={() => setExpandNavbar((prev) => !prev)}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/experience'> Experience </Link>
                <Link to='/create'> Create CV </Link>
                <Link to='/profile'> Profile </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar