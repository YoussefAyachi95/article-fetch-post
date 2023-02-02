import React, { useState } from 'react'   

export default function ContactForm() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {firstName, email, message};

        fetch('http://localhost:4000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact)
        }).then(() => {
            console.log("New contact added");
        })
    };



  return (
    <>
   <div id="form-main">
  <div id="form-div">
    <form className="form" id="form1">
      
      <p className="name">
        <input name="name" value={firstName} onChange={(e) =>
          setFirstName(e.target.value)
        } type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p className="email">
        <input name="email" value={email} onChange={(e) => {
          setEmail(e.target.value);
        }} type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>
      
      <p className="text">
        <textarea name="text" value={message} onChange={(e) => {
          setMessage(e.target.value);
        }}  className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Your message"></textarea>
      </p>
      
      
      <div className="submit">
        <input type="submit" value="SEND" id="button-blue" onClick={handleSubmit}/>
        <div className="ease"></div>
      </div>
    </form>
  </div>
  </div> 
</>
  )
}
