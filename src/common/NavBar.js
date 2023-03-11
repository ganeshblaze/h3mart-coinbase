import React, { Component } from 'react';
import '../common/navbar.css';
import settings from '../images/icons8-automatic-32.png';
import search from '../images/icons8-search.svg';

class Navbar extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className='container-menu'>
                <div className='menu-nav'>
                    <div className='menu-links'>
                        <a href=''>
                            <div className='menu-link-items'>
                                Coins
                            </div>
                        </a>
                        <a href=''>
                            <div className='menu-link-items'>
                                Exchange
                            </div>
                        </a>
                        <a href=''>
                            <div className='menu-link-items'>
                                Swap
                            </div>
                        </a>
                    </div>

                    <a>
                        <img src="https://coincap.io/static/logos/black.svg" className="tiny-image" />
                    </a>
                    <div className='menu-links'>
                        <div className='menu-link-items'>USD</div>
                        <div className='menu-link-items'>ENGLISH</div>
                        <div className='menu-link-items'>
                            <img className='search-icon' src={search}></img>
                        </div>
                        <div className='menu-link-items'>
                            <img src={settings}></img>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Navbar;  