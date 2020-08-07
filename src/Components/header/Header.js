import React from 'react';
import {Link} from 'react-router-dom'



function Header (){


    return(<div className='header'>

        <h3>SHELFIE</h3>

        <nav className='menu'>
            
            
                    <Link to="/">Dashboard</Link>
                
                
                    <Link to="/AddInv">Add Inventory</Link>
                
            
        </nav>
    </div>


    )
}
export default Header;