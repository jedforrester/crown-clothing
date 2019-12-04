import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='content'>
                <h1 className='title'>Hats</h1>
                <span className='subtitle'> Shop Hats</span>
            </div>
            <div className='content'>
                <h1 className='title'>Jackets</h1>
                <span className='subtitle'> Shop Jackets</span>
            </div>
            <div className='content'>
                <h1 className='title'>Womens</h1>
                <span className='subtitle'> Shop Womens</span>
            </div>
            <div className='content'>
                <h1 className='title'>Mens</h1>
                <span className='subtitle'> Shop Mens</span>
            </div>
            <div className='content'>
                <h1 className='title'>Sneakers</h1>
                <span className='subtitle'> Shop Sneakers</span>
            </div>
        </div>
    </div>
)


export default HomePage;