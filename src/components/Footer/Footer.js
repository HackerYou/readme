import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="mainFooter card">
            <h3>HackerYou</h3>
            <ul>
                <li><a href="http://hackeryou.com">
                    <i className="chalk-link" />hackeryou.com</a>
                </li>
                <li><a href="mailto:info@hackeryou.com">
                    <i className="chalk-email" />info@hackeryou.com</a>
                </li>
                <li><a href="http://github.com/hackeryou">
                    <i className="chalk-github" />github.com/hackeryou</a>
                </li>
                <li><a href="http://twitter.com/hackeryou">
                    <i className="chalk-twitter" />@hackeryou</a>
                </li>
            </ul>
            <p>
                <strong>Copyright {year}<a href="http://hackeryou.com" className="blackLight" >HackerYou</a></strong>
                <br />
                <small>The contents of this site are the property of HackerYou.
                No portion of this site is to be shared without permission.</small>
            </p>
        </footer>
    );
};

export default Footer;

