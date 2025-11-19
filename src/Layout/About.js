import React, { useEffect } from 'react';
import { SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function About(props) {
const subject = [
  {
    title: 'HTML',
    image:'image/html.png',
    description:'Learned the foundational structure of web pages, including elements, tags, semantic markup, and best practices for building accessible and well-organized content.'
  },
  {
    title: 'CSS',
    image:'image/css.png',
    description:'Studied how to design and style web pages using modern CSS techniques, including layouts, responsive design, animations, and visual formatting for professional UI.'
  },
  {
    title: 'PHP',
    image:'image/php.png',
    description:'Explored server-side programming using PHP, focusing on handling forms, working with databases, managing sessions, and creating dynamic and interactive web applications.'
  },
  {
    title: 'Laravel',
    image:'image/laravel.png',
    description:'Learned Laravel’s MVC architecture, routing, controllers, Blade templates, Eloquent ORM, and how to build secure, scalable, and modern web applications using its framework tools.'
  },
  {
    title: 'C#',
    image:'image/csharp.png',
    description:'Gained experience in object-oriented programming with C#, learning classes, inheritance, data types, and building console and basic desktop applications.'
  },
  {
    title: 'Asp.Net',
    image:'image/aspnet.png',
    description:'Studied web application development with ASP.NET, including MVC patterns, Razor pages, routing, controllers, and integrating backend logic with dynamic user interfaces.'
  },
  {
    title: 'MySql',
    image:'image/mysql.png',
    description:'Learned relational database concepts using MySQL, including creating tables, writing SQL queries, relationships, data management, and connecting databases to web applications.'
  },
  {
    title: 'SQL Server',
    image:'image/sqlserver.png',
    description:'Explored database management using Microsoft SQL Server, focusing on stored procedures, advanced queries, indexing, security, and managing enterprise-level data systems.'
  },
];
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const side = entry.target.dataset.side; // left or right

        if (side === "left") {
          entry.target.classList.add("vt-show-left");
        } else {
          entry.target.classList.add("vt-show-right");
        }

        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".vt-hidden").forEach((el) => {
    observer.observe(el);
  });
}, []);


    return (
        <div className='container mt-1' id='about'>
          <div></div>
            <h3 align="center">About me</h3>
            <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
                <h5>I'm a year 3 student at Beltei International University.</h5> 
                <h5>Through out from year 1 to year 3, I have learned various of programming langauge.</h5> 
            </div>
            <div>
                <Swiper
                className='mt-2'
                style={{paddingBottom:'40px',color:'white'}}
                modules={[Pagination]} 
                pagination={{clickable:true}}
                spaceBetween={50}
                slidesPerView={4}
                breakpoints={{
                    1200: { slidesPerView: 4 },
                    992: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
                >
                    {subject.map((sb,index)=>(
                    <SwiperSlide key={index} >
                    <div className="card">
                        <div className="card-body vt-hidden" data-side="left" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h5 className="card-title">{sb.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary d-flex justify-content-center align-items-center">
                            <img src={sb.image} style={{ width: '5rem' }} />
                        </h6>
                        <p className="card-text">{sb.description}</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                <div>
                    <h3 align="center">Education</h3>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            date="2021 - Present"
                            contentStyle={{ background: 'lightblue',}}
                        >
                            <h3 className='text-dark'>Went to Beltei International University</h3>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            date="2013 - 2023"
                        >
                            <h3 className='text-dark'>Went to Beltei International School</h3>
                            <p className='text-dark'>Campus 1, BKK</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date="2011 - 20213"
                        >
                            <h3 className='text-dark'>Went to Pongro Primary School</h3>
                            <p className='text-dark'>Banteay Mean Chey Province</p>
                        </VerticalTimelineElement>
                        </VerticalTimeline>
                </div>
                <div className='mt-3'>
                    <h3 align="center">Experience</h3>
                    <div className='d-flex flex-column flex-lg-row gap-5 mt-5 vt-hidden' data-side="left">
                    <div style={{ 
                        position: 'relative', 
                        paddingLeft: '30px', 
                        maxWidth: '600px',
                        marginLeft: '20px' 
                        }}>
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '6px',                 
                            backgroundColor: '#21b6a8',   
                            borderTopLeftRadius: '10px',  
                            borderBottomLeftRadius: '10px' 
                        }} />
                        {/* Your content goes here */}
                        <h3>Freelance</h3>
                        <p>Sep 2025 - Nov 2025</p>
                        <p>Create a e-commerce website using laravel and react by api to make a beautiful design website.</p>
                        <p>Website : https://855toys.com/</p>
                        {/* more content */}
                        </div>
                        <div style={{ 
                        position: 'relative', 
                        paddingLeft: '30px', 
                        maxWidth: '600px',
                        marginLeft: '20px' 
                        }}>
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '6px',                 
                            backgroundColor: '#21b6a8',   
                            borderTopLeftRadius: '10px',  
                            borderBottomLeftRadius: '10px' 
                        }} />
                        {/* Your content goes here */}
                        <h3>References</h3>
                        <p>Mr. Wang Zhuang</p>
                        <p>Owner of toy store</p>
                        <p>Phone Number : +855 16 940 063</p>
                        {/* more content */}
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default About;