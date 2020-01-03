import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';

const Header = () => {
    const Nav = styled.nav`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
       
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover {
        background-color: gold;
      }
      `;


    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                <div class="row">
                    <div class="span-2">
                        <img src={logo} alt="logo" style={{ height: "100px", width: "250px" }} />
                    </div>

                    <div class="span-8">
                        <Nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/movies">Movies</a></li>
                            </ul>
                        </Nav>
                    </div>

                </div>
            </nav>
        </React.Fragment>
    );
};

export default Header;