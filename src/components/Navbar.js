import React from 'react'

function Navbar(){
    return(
        <div>
            <nav className='navbar'>
                <div className='brand'>
                    <img src="images/logo.png" />
                    <h1>ReactFacts</h1>
                </div>
                <ul className='nav-item'>
                    <li>Light</li>
                    <li><button>On</button></li>
                    <li>Dark</li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar