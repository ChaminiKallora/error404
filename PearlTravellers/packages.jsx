import React, {Component} from 'react';
import {render} from 'react-dom';

import self from './images_travel/self.jpg';
import pic03 from './images/pic03.jpg';
import pic04 from './images/pic04.jpg';

export default class packages extends Component {
    render() {
        return (
            <div>
                {/*
	Horizons by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/}
                <title>Right Sidebar - Horizons by TEMPLATED</title>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta name="description" content />
                <meta name="keywords" content />
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
                                <li><a href="right-sidebar.html">Packages</a></li>
                                <li><a href="no-sidebar.html">AboutUs</a></li>
                                <li><a href="left-sidebar.html">FAQs</a></li>
                                <li><a href="UserManagement_login.jsx">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Main */}
                <div id="main" className="wrapper style1">
                    <div className="container">
                        <div className="row">
                            {/* Content */}
                            {/* Featured */}
                            <div className="wrapper style2">
                                <section className="container">
                                    <header className="major">
                                        <h2>Packages</h2>
                                    </header>
                                    <div className="row no-collapse-1">
                                        <section className="4u">
                                            <a href="selfdriven.jsx" className="image feature"><img src={self} width="286px" height="196px" alt />
                                                <h3>Self Driven</h3></a>
                                            <p>
                                                Free Roam
                                            </p>
                                        </section>
                                        <section className="4u">
                                            <a href="#" className="image feature"><img src={pic03} alt /></a>
                                            <p>Donec ornare neque ac sem. Mauris aliquet. Aliquam sem leo, vulputate sed, convallis. Donec magna.</p>
                                        </section>
                                        <section className="4u">
                                            <a href="#" className="image feature"><img src={pic04} alt /></a>
                                            <p>Curabitur sem urna, consequat vel, suscipit convallis sem leo, mattis placerat, nulla. Sed ac leo.</p>
                                        </section>
                                    </div>
                                </section>
                            </div>
                            {/* Sidebar */}
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div id="footer">
                    <div className="container">
                        {/* Lists */}
                        <div className="row">
                            <div className="8u">
                                <section>
                                    <header className="major">
                                        <h2>Donec dictum metus</h2>
                                        <span className="byline">Quisque semper augue mattis wisi maecenas ligula</span>
                                    </header>
                                    <div className="row">
                                        <section className="6u">
                                            <ul className="default">
                                                <li><a href="#">Pellentesque elit non gravida blandit.</a></li>
                                                <li><a href="#">Lorem ipsum dolor consectetuer elit.</a></li>
                                                <li><a href="#">Phasellus nibh pellentesque congue.</a></li>
                                                <li><a href="#">Cras vitae metus aliquam  pharetra.</a></li>
                                            </ul>
                                        </section>
                                        <section className="6u">
                                            <ul className="default">
                                                <li><a href="#">Pellentesque elit non gravida blandit.</a></li>
                                                <li><a href="#">Lorem ipsum dolor consectetuer elit.</a></li>
                                                <li><a href="#">Phasellus nibh pellentesque congue.</a></li>
                                                <li><a href="#">Cras vitae metus aliquam  pharetra.</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </section>
                            </div>
                            <div className="4u">
                                <section>
                                    <header className="major">
                                        <h2>Donec dictum metus</h2>
                                        <span className="byline">Mattis wisi maecenas ligula</span>
                                    </header>
                                    <ul className="contact">
                                        <li>
                                            <span className="address">Address</span>
                                            <span>1234 Somewhere Road #4285 <br />Nashville, TN 00000</span>
                                        </li>
                                        <li>
                                            <span className="mail">Mail</span>
                                            <span><a href="#">someone@untitled.tld</a></span>
                                        </li>
                                        <li>
                                            <span className="phone">Phone</span>
                                            <span>(000) 000-0000</span>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className="copyright">
                            Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<packages/>, document.getElementById('app'));