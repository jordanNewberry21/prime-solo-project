import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => 
                        <footer>
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} 
                                className="btn_asLink">Back To Top
                            </button> | &copy; 2020 Creations by Casey | Built by Jordan Newberry
                        </footer>;

export default Footer;
