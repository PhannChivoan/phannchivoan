import React from 'react';

function Footer(props) {
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
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">
                        Hello, I’m Phann Chivoan. My goal is to become a full stack web developer. Although I’m early in my career, I’m highly motivated and continually improving my skills in both front-end and back-end development. I am very passionate about web development. I hope for an opportunity for me in developing myself in a working environment for growing more on my experience both as an individual and as an asset for your company. Thank you for reading my resume.
                        </p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                        <li>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigatetoheader()
                            }}>
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigateto()
                            }}>About Me</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigatetoproject()
                            }}>
                            Project
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            onClick={(e)=>{
                                e.preventDefault();
                                navigatetocontact()
                            }}>Contact</a>
                        </li>
                        </ul>
                    </div>
                        <div className="col-xs-6 col-md-3">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h6>Download MY CV HERE</h6>
                        <div>
                        <a href={process.env.PUBLIC_URL +"/cv/PhannChivoan_Resume.pdf"} download>
                            <button className='btn btn-danger'>Download</button>
                        </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                        Copyright © 2025 All Rights Reserved by
                        <a href="#"> Phann Chivoan</a>.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a className="facebook" href="https://www.facebook.com/chivorn.phann.0/">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="https://t.me/PhannChivoan">
                                    <i className="fa-brands fa-telegram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="dribbble" href="tel:+855 16 654 546">
                                    <i className="fa-solid fa-phone"></i>
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href="https://github.com/PhannChivoan">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    </div>
                </div>
                </footer>

        </div>
    );
}

export default Footer;