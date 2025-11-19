import React from 'react';
import ThreeDImageCarousel from "./ThreeDImageCarousel.jsx";
const slides = [
  { id: 1, src: process.env.PUBLIC_URL +"/image/Project1/image1.png", href: "#" },
  { id: 2, src: process.env.PUBLIC_URL +"/image/Project1/image2.png", href: "#" },
  { id: 3, src: process.env.PUBLIC_URL +"/image/Project1/image3.png", href: "#" },
  { id: 4, src: process.env.PUBLIC_URL +"/image/Project1/image4.png", href: "#" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project1/image5.png", href: "#" },
];
const project2 = [
  { id: 1, src: process.env.PUBLIC_URL +"/image/Project2/image1.png", href: "#" },
  { id: 2, src: process.env.PUBLIC_URL +"/image/Project2/image2.png", href: "#" },
  { id: 3, src: process.env.PUBLIC_URL +"/image/Project2/image3.png", href: "#" },
  { id: 4, src: process.env.PUBLIC_URL +"/image/Project2/image4.png", href: "#" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project2/image5.png", href: "#" },
];
const project3 = [
  { id: 1, src: process.env.PUBLIC_URL +"/image/Project1/image1.png", href: "#" },
  { id: 2, src: process.env.PUBLIC_URL +"/image/Project1/image2.png", href: "#" },
  { id: 3, src: process.env.PUBLIC_URL +"/image/Project1/image3.png", href: "#" },
  { id: 4, src: process.env.PUBLIC_URL +"/image/Project1/image4.png", href: "#" },
  { id: 5, src: process.env.PUBLIC_URL +"/image/Project1/image5.png", href: "#" },
];
function Project(props) {
    return (
        <div className='mt-5'>
            <h3 align="center" id="project">Project</h3>
            <div className='mt-4'>
                <div className='d-flex justify-content-center align-items-center flex-column text-center'>
                    <h5>Freelance Project</h5> 
                    <p className='text-wrap d-flex' style={{ maxWidth: '100%',width:'50rem'}}>Build Full-Stack E-commerce project with react and laravel using api for communication between this two programming langauge to achieve unrefresh website with cloudways service. </p> 
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
                <div className='d-flex justify-content-center align-items-center flex-column text-center'>
                    <h5>Personal Project</h5> 
                    <p className='text-wrap d-flex' style={{ maxWidth: '100%',width:'50rem'}}>Build backend POS System to use for general restaurant which varies in different menu and category build with mvc of laravel with render.com service.</p> 
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
                <div className='d-flex justify-content-center align-items-center flex-column text-center'>
                    <h5>Academy Project</h5> 
                    <p className='text-wrap d-flex' style={{ maxWidth: '100%',width:'50rem'}}>Build Full-Stack E-commerce project with react and laravel using api for communication between this two programming langauge to achieve unrefresh website with cloudways service. </p> 
                </div>
                <div>
                    <ThreeDImageCarousel 
                    slides={slides} 
                    autoplay={true} 
                    delay={4} 
                    />  
                </div>
            </div>
        </div>
    );
}

export default Project;