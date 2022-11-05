import React from 'react'
import { Link } from 'react-router-dom';
import style from './home.module.scss';

function Home() {
    return ( 
        <div className={style.home}>
            <div className={style.link}>
                <Link to='/bai1'>
                    Bai 1
                </Link>
                <Link to='/bai2'>
                    Bai 2
                </Link>
                <Link to='/bai3'>
                    Bai 3
                </Link>
            </div>
        </div>
     );
}

export default Home;