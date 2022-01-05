import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer>
        <p>GT-Co © {currentYear}</p>
    </footer> 
}

export default Footer;
