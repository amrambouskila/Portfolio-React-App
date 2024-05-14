import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

const ContactPage = () => {
    const email = 'amrambouskila@gmail.com';
    const linkedin = 'https://www.linkedin.com/in/amrambouskila';
    const github = 'https://github.com/amrambouskila';
    return (
        <div className="contact-background-image-container">
            <div className="contact-page">
                <h1 style={{color: 'whitesmoke'}}>Contact Me</h1>
                <div className="contact-links">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/amrambouskila" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>
                            <span className="email-tooltip">{linkedin}</span>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/amrambouskila" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                            <span className="email-tooltip">{github}</span>
                        </a>
                    </div>
                    <div className="email-icon">
                        <FontAwesomeIcon icon={faEnvelope} className="purple-icon" />
                        <span className="email-tooltip">{email}</span>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
};

export default ContactPage;
