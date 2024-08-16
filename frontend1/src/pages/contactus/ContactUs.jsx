import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Example of form submission
    try {
      // Replace with your form submission logic
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setFormSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div className='contact-us'>
      <header className='contact-us-header'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below or reach out to us through the contact details provided.</p>
      </header>
      <section className='contact-us-info'>
        
        <div className='contact-us-form'>
          <h2>Send Us a Message</h2>
          {formSent ? (
            <p className='success-message'>Thank you for your message. We will get back to you soon!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {error && <p className='error-message'>{error}</p>}
              <button type='submit' className='message'>Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
