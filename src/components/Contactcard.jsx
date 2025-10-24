import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      email,
      phone,
      
    };

   
    addContact(newContact);

    
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Add a New Contact</h2>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Phone</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />


      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
