import React, {Component} from 'react';
import {render} from 'react-dom';

import './layout.css';
import './UserManagement.css';

export default class UserManagement_login extends Component {
    render() {
            return (
                <div>
                    <div id="top_div">

                        <div id="top_right">
                            <div id="top">
                                <div id="topic">
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            {/* Tabs Titles */}
                            {/* Icon
              <div class="fadeIn first">
                <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
              </div> */}
                            {/* Login Form */}
                            <form action="./homePage.jsx" method="post">
                                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                                <input type="password" id="password" className="fadeIn second" name="login" placeholder="password" />
                                <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                            </form>
                            {/* Remind Passowrd */}
                            <div id="formFooter">
                                <a className="underlineHover" href="">Forgot Password?</a>
                            </div>
                            <div id="formFooter">
                                <li><a className="underlineHover" href="">Sign Up</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render(<UserManagement_login/>, document.getElementById('app'));
