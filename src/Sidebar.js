import React from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <section className='sidebar'>
            <Link to='/'>Home</Link>
            <p><Link to='/meditation'>명상</Link></p>
            <Link to='/workout'>운동</Link>
        </section>
    )
}

export default Sidebar
