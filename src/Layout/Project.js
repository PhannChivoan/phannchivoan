import React from 'react';
import ThreeDImageCarousel from "./ThreeDImageCarousel.jsx";
const slides = [
  { id: 1, src: process.env.PUBLIC_URL +"/image/Project1/image1.png", href: process.env.PUBLIC_URL +"/image/Project1/image1.png" },
  { id: 2, src: process.env.PUBLIC_URL +"/image/Project1/image2.png", href: process.env.PUBLIC_URL +"/image/Project1/image2.png" },
  { id: 3, src: process.env.PUBLIC_URL +"/image/Project1/image3.png", href: process.env.PUBLIC_URL +"/image/Project1/image3.png" },
  { id: 4, src: process.env.PUBLIC_URL +"/image/Project1/image4.png", href: process.env.PUBLIC_URL +"/image/Project1/image4.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project1/image5.png", href: process.env.PUBLIC_URL +"/image/Project1/image5.png" },
];
const project2 = [
  { id: 1, src: process.env.PUBLIC_URL +"/image/Project2/image1.png", href: process.env.PUBLIC_URL +"/image/Project2/image1.png" },
  { id: 2, src: process.env.PUBLIC_URL +"/image/Project2/image2.png", href: process.env.PUBLIC_URL +"/image/Project2/image2.png" },
  { id: 3, src: process.env.PUBLIC_URL +"/image/Project2/image3.png", href: process.env.PUBLIC_URL +"/image/Project2/image3.png" },
  { id: 4, src: process.env.PUBLIC_URL +"/image/Project2/image4.png", href: process.env.PUBLIC_URL +"/image/Project2/image4.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project2/image5.png", href: process.env.PUBLIC_URL +"/image/Project2/image5.png" },
];
const project3 = [
  { id: 1, src: process.env.PUBLIC_URL +"/image/Project3/image1.png", href: process.env.PUBLIC_URL +"/image/Project3/image1.png" },
  { id: 2, src: process.env.PUBLIC_URL +"/image/Project3/image2.png", href: process.env.PUBLIC_URL +"/image/Project3/image2.png" },
  { id: 3, src: process.env.PUBLIC_URL +"/image/Project3/image3.png", href: process.env.PUBLIC_URL +"/image/Project3/image3.png" },
  { id: 4, src: process.env.PUBLIC_URL +"/image/Project3/image4.png", href: process.env.PUBLIC_URL +"/image/Project3/image4.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project3/image5.png", href: process.env.PUBLIC_URL +"/image/Project3/image5.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project3/image6.png", href: process.env.PUBLIC_URL +"/image/Project3/image6.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project3/image7.png", href: process.env.PUBLIC_URL +"/image/Project3/image7.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project3/image8.png", href: process.env.PUBLIC_URL +"/image/Project3/image8.png" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project3/image9.png", href: process.env.PUBLIC_URL +"/image/Project3/image9.png" },
];
function Project(props) {
    return (
        <div className='mt-5'>
            <h3 align="center" id="project">Project</h3>
            <div className='mt-4'>
            <div className='d-flex justify-content-center align-items-center flex-column text-center mb-2'>
                <h5>Freelance Project</h5> 
                <p className='text-wrap' style={{ maxWidth: '100%', width:'50rem' }}>
                    Build Full-Stack E-commerce project with React and Laravel using API for communication between these two programming languages to achieve an unrefresh website with Cloudways service.
                </p> 
                <p className='text-wrap' style={{ maxWidth: '100%', width:'50rem' }}>
                    Technology used: Laravel, React, Bootstrap, Restful API
                </p> 
                <p className='text-wrap' style={{ maxWidth: '100%', width:'50rem' }}>
                    Link: <a href='https://855toys.com/' style={{ textDecoration:'none', color:'white' }}>https://855toys.com/</a>
                </p> 
            </div>
                <div>
                    <ThreeDImageCarousel 
                    slides={slides} 
                    autoplay={true} 
                    delay={4} 
                    />  
                </div>
            </div>
                <div className='mt-4'>
                <div className='d-flex justify-content-center align-items-center flex-column text-center mb-2'>
                    <h5>Personal Project</h5> 
                    <p className='text-wrap d-flex' style={{ maxWidth: '100%',width:'50rem'}}>Build backend POS System to use for general restaurant which varies in different menu and category build with mvc of laravel with render.com service.</p> 
                    <p className='text-wrap' style={{ maxWidth: '100%', width:'50rem' }}>
                    Technology used: Laravel, Bootstrap, Ajax
                    </p> 
                    <p className='text-wrap' style={{ maxWidth: '100%', width:'50rem' }}>
                        Link: <a href='https://mypos-9lg7.onrender.com/' style={{ textDecoration:'none', color:'white' }}>https://mypos-9lg7.onrender.com/</a>
                    </p> 
                </div>
                <div>
                    <ThreeDImageCarousel 
                    slides={project2} 
                    autoplay={true} 
                    delay={4} 
                    />  
                </div>
            </div>
                <div className='mt-4'>
                <div className='d-flex justify-content-center align-items-center flex-column text-center mb-2'>
                    <h5>Academy Project</h5> 
                    <p className='text-wrap d-flex' style={{ maxWidth: '100%',width:'50rem'}}>Build an admin dashboard for manging E-commerce store on front page with smooth behaviour for assignment in year 2 semester 2.</p> 
                    <p className='text-wrap' style={{ maxWidth: '100%', width:'50rem' }}>
                        Technology used: Laravel, Bootstrap
                    </p> 
                </div>
                <div>
                    <ThreeDImageCarousel 
                    slides={project3} 
                    autoplay={true} 
                    delay={4} 
                    />  
                </div>
            </div>
        </div>
    );
}

export default Project;