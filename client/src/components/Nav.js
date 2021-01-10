import React from 'react';
import {Link} from 'react-router-dom';
function Nav(props) {
    return (

        <>
        <h1><Link to = '/'>Tees Shee's</Link></h1>
        <nav>

            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/shop'>Shop</Link></li>
            <li><Link to = '/blogs'>Blogs</Link></li>
            <li><Link to = '/contact'>Contact</Link></li>
        </nav>    
        </>
    );
}

export default Nav;