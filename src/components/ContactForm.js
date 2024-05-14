import React, { useState } from 'react';
import axios from 'axios';

const PORT = process.env.PORT || 5000;
const url = `http://127.0.0.1:${PORT}/send-email`;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form data before sending:', formData);
            console.log(`the active port is ${PORT}`)
            const response = await axios.post(url, formData);
            console.log(response.data);

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });

            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
