import React from 'react';
import {Link} from 'react-router-dom'



function Header (){


    return(
        <h1>SHELFIE</h1>

        <nav>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/AddInv">Add Inventory</Link>
                </li>
            </ul>
        </nav>


    )
}
export default Header: