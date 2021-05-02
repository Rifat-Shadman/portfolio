import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div class="outer-container">
            <nav class="nav-container">
                <a class="site-logo" href="/">
                    <span class="logo-text">
                        RSJ
                    </span>
                </a>

                <ul class="nav-right">
                    <li class="list-item">
                        <a href="/">Home</a>
                    </li>
                    <li class="list-item">
                        <a href="/projects">Projects</a>
                    </li>
                    <li class="list-item">
                        <a href="/blogs">Blogs</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;