import React, {Fragment, useState} from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import './ContactForm.css';
import { Button } from './Button';

const ContactForm = () => {
 
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        console.log('enviando data...' + data.name + ' '  + data.email  + data.subject + data.message)
    }

    return (
        <Fragment>
            <div className='contact-container'>
            <h1 className='contact-heading'>Contact Us</h1>
              <p className='contact-form-text'>
                We’re available for remote projects around the world.
                 </p>
            <form className="form__container-card" onSubmit={sendData}>
                <div className="">
                    <input type="text"
                     placeholder="Name" className="form-input" 
                     onChange={handleInputChange} name="name">
                     </input>
                </div>
                <div className="">
                <input type="email"
                     placeholder="Email address" className="form-input" 
                     onChange={handleInputChange} name="email">
                     </input>
                </div>
                <div className="">
                     <input type="text"
                     placeholder="Subject" className="form-input" 
                     onChange={handleInputChange} name="subject">
                     </input>
                </div>
                <div className="">
                    <textarea type="text"
                     placeholder="Message" className="form-input" 
                     onChange={handleInputChange} name="message">
                     </textarea>
                </div>
                <Button type="submit"  className='btn--primary'  buttonSize='btn--wide' buttonColor='pink'>
                    Send
                    </Button>
            </form>
            </div>
        </Fragment>
    );
}     


export default ContactForm;

