import React from 'react';

function Navbar(props) {
    function navigateto(){
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    function navigatetoheader(){
        const aboutSection = document.getElementById("headers");
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    function navigatetocontact(){
        const aboutSection = document.getElementById("contact");
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }
        function navigatetoproject(){
        const aboutSection = document.getElementById("project");
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div>
        <nav class="bottom-nav">
            <div class="nav-item"data-page="header" onClick={navigatetoheader}>
                <i class="fas fa-home"></i>
                <span >Home</span>
            </div>
            <div class="nav-item" data-page="about" onClick={navigateto}>
                <i class="fas fa-user"></i>
                <span>About</span>
            </div>
            <div class="nav-item" data-page="project" onClick={navigatetoproject}>
                <i class="fas fa-briefcase"></i>
                <span>Project</span>
            </div>
            <div class="nav-item" data-page="contact" onClick={navigatetocontact}>
                <i class="fas fa-envelope"></i>
                <span>Contact</span>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;