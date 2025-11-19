import React from 'react';

function Contact(props) {
    return (
        <div className='mt-5'>
            <h3 align="center" id="contact">Contact me</h3>
            <div>
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <div className="row g-0 shadow-lg">
                            <div className="col-md-7">
                                <div className="contact-wrap">
                                <h3>Get in touch</h3>
                                <form id="contactForm">
                                    <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        required=""
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required=""
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        required=""
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <textarea
                                        className="form-control"
                                        placeholder="Message"
                                        required=""
                                        defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary">
                                        Send Message
                                        </button>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="info-wrap h-100">
                                <h3>Contact</h3>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-text">
                                    <span>Address:</span>
                                    <p>Borey New World Kh6, Songkat Kilometer 6, Russey Keo, Phnom Penh</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                    <i className="fas fa-phone" />
                                    </div>
                                    <div className="contact-text">
                                    <span>Phone:</span>
                                    <p>
                                        <a href="tel:+85516654546">+855 16 654 546</a>
                                    </p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                    <i className="fas fa-paper-plane" />
                                    </div>
                                    <div className="contact-text">
                                    <span>Telegram:</span>
                                    <p>
                                        <a href="https://t.me/PhannChivoan">https://t.me/PhannChivoan</a>
                                    </p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                    <i className="fas fa-globe" />
                                    </div>
                                    <div className="contact-text">
                                    <span>Email:</span>
                                    <p>
                                        <a href="mailto:phannchivoan.biu@gmail.com">phannchivoan.biu@gmail.com</a>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

            </div>
        </div>
    );
}

export default Contact;