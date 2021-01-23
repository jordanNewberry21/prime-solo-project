import React from 'react';
import './Footer.css';

const Footer = () => 
                        <footer>
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} 
                                className="btn_asLink">Back To Top
                            </button> | &copy; 2020 Creations by Casey | Built by Jordan Newberry
                        </footer>;

export default Footer;
