import React, {Component} from 'react';
import {render} from 'react-dom';

import pic01 from './images/pic01.jpg';
import pic02 from './images/pic02.jpg';
import pic03 from './images/pic03.jpg';

import weather from './images_travel/weather.png';
import population from './images_travel/population.jpg';
import law from './images_travel/law.jpg';
import language from './images_travel/language.png';

import init from './js/init.js';

import fontawesome from './css/font-awesome.min.css';
import skel from './css/skel.css';
import style from './css/style.css';
import mobile from './css/style-mobile.css';
import narrow from './css/style-narrow.css';
import narrower from './css/style-narrower.css';
import normal from './css/style-normal.css';
import wide from './css/style-wide.css';

export default class homePage extends Component {
    render() {
        return (
            <div>
                <title>Pearl Travellers</title>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
                <meta name="description" content/>
                <meta name="keywords" content/>
                {/*[if lte IE 8]><![endif]*/}
                <noscript>
                    &lt;link rel="stylesheet" href="css/skel.css" /&gt;
                    &lt;link rel="stylesheet" href="css/style.css" /&gt;
                </noscript>
                {/*[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]*/}
                {/* Header */}
                <div id="header">
                    <div className="container">
                        {/* Logo */}
                        <h1><a href="#" id="logo">Pearl Travellers</a></h1>
                        {/* Nav */}
                        <nav id="nav">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href>Discover Sri Lanka</a></li>
                                <li><a href="packages.jsx">Packages</a></li>
                                <li><a href="no-sidebar.html">AboutUs</a></li>
                                <li><a href="left-sidebar.html">FAQs</a></li>
                                <li><a href="UserManagement_login.jsx">Login</a></li>
                            </ul>
                        </nav>
                        {/* Banner */}
                        <div id="banner">
                            <div className="container">
                                <section>
                                    <header className="major">
                                        <h2>Explore Sri Lanka</h2>
                                        <h3>The Wonder of Asia</h3>
                                    </header>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured */}
                <div className="wrapper style2">
                    <section className="container">
                        <header className="major">
                            <h2>About Sri Lanka</h2>
                            <span className="byline">Tourism in Sri Lanka is growing rapidly. For centuries, Sri Lanka has been a popular place of attraction for
                foreign travelers. The Chinese traveler Fa-Hien visited Sri Lanka as early as the 4th century, and in the twelfth century, Italian
                explorer Marco Polo claimed Sri Lanka to be the "best island of its size in the world".</span>
                        </header>
                        <div className="row no-collapse-1">
                            <section className="4u">
                                <a href="#" className="image feature"><img src={pic01}
                                                                           width="286px" height="196px" alt/></a>
                            </section>
                            <section className="4u">
                                <a href="#" className="image feature"><img src={pic02} width="286px"
                                                                           height="196px" alt/></a>
                            </section>
                            <section className="4u">
                                <a href="#" className="image feature"><img src={pic03} width="286px"
                                                                           height="196px" alt/></a>
                            </section>
                        </div>
                    </section>
                </div>
                {/* Main */}
                <div id="main" className="wrapper style1">
                    <section className="container">
                        <div className="row" align="center">
                            {/* Content */}
                            <div className="6u">
                                <section>
                                    <ul className="style">
                                        <li>
                                            <a href="https://www.accuweather.com/en/lk/sri-lanka-weather">
                                                <h3>Weather</h3>
                                                <span><img src={weather} width="100px" height="100px"
                                                           alt/></span></a>
                                        </li>
                                        <li>
                                            <a href="http://www.worldometers.info/world-population/sri-lanka-population/">
                                                <h3>Popularity</h3>
                                                <span><img src={population} width="100px"
                                                           height="100px" alt/></span></a></li>
                                    </ul>
                                </section>
                            </div>
                            <div className="6u">
                                <section>
                                    <ul className="style">
                                        <li>
                                            <a href="https://en.wikipedia.org/wiki/Law_of_Sri_Lanka">
                                                <h3>Law System</h3>
                                                <span><img src={law} width="100px" height="100px"
                                                           alt/></span></a>
                                        </li>
                                        <li>
                                            <a href="https://en.wikipedia.org/wiki/Languages_of_Sri_Lanka">
                                                <h3>Languages</h3>
                                                <span><img src={language} width="100px" height="100px"
                                                           alt/></span></a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Footer */}
                <div id="footer">
                    <div className="container">
                        {/* Lists */}
                        <div className="row">
                            <div className="8u">
                                <section>
                                    <header className="major">
                                        <h2>Our Partners</h2>
                                    </header>
                                    <div className="row">
                                        <section className="6u">
                                            <ul className="default">
                                                <li><a href="#">Sri Lanka Tourism Promotion Bureau.</a></li>
                                                <li><a href="#">Sri Lanka Tourism Development Authority</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className="copyright">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<homePage/>, document.getElementById('app'));

