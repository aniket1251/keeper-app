import React from "react";

const currentYear = new Date().getFullYear();

function Footer(){
    return <footer>Copyright © {currentYear}</footer>
};

export default Footer;