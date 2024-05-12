import './Contact.css'
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
          firstName: '',
          lastName: '',
          message: ''
        });
      };
    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>Contactez-nous</h2>
                <span className='line'></span>
                <div className='content'>
                <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="firstName">Prénom:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Nom:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
