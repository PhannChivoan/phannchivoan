import { ArrowDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function Header(props) {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = 'PHANN CHIVOAN';
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2000; 

    useEffect(() => {
        let timeout;

        if (!isDeleting && displayText === fullText) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(fullText.substring(0, displayText.length - 1));
            }, deletingSpeed);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting]);
    function navigatetoheader(){
        const aboutSection = document.getElementById("headers");
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    function navigateto(){
        const aboutSection = document.getElementById("about");
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
        <>
            <nav className='sticky-navbar'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center' style={{height:'10vh'}}>
                    <div><h4>Phann Chivoan</h4></div>
                    <div className='d-block d-md-none'>
                        <a href={process.env.PUBLIC_URL +"/cv/PhannChivoan_Resume.pdf"} download>
                            <button className='btn btn-primary'>Download CV</button>
                        </a>
                    </div>
                    <div className='d-flex justify-content-between w-25 head-nav d-none d-md-flex'>
                        <div>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigatetoheader()
                            }}>Home</a>
                        </div>
                        <div>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigateto()
                            }}>About</a>
                        </div>
                        <div>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigatetoproject()
                            }}>Project</a>
                        </div>
                        <div>
                            <a href="#" onClick={(e)=>{
                                e.preventDefault();
                                navigatetocontact()
                            }}>Contact</a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            <div className='header-nav' id="headers">
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh',marginTop:'50px'}}>
                        <div className='d-flex flex-column gap-5 align-items-center'>
                        <img src={process.env.PUBLIC_URL +'image/me.JPG'} className='image-fluid rounded-circle' style={{width:'10rem',height:'10rem',border:'5px solid white'}}/> 
                        <h3>
                            HELLO, I'M <span className="typing-text intro">{displayText}</span><span className="cursor">|</span>
                        </h3>
                        <h4><span className='intro'>APPLYING FOR WEB DEVELOPER</span></h4>
                        <div className="arrow" onClick={navigateto}>
                        <span>More About Me</span>
                        <div className="arrow-down">
                            <ArrowDown size={20} strokeWidth={0.75} />
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;