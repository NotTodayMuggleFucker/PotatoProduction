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
        console.log('sending data...' + data.name + ' ' + data.email + ' ' + data.subject  + ' ' + data.message)
    }
    

    return (
        <Fragment>
            <div className='contact-container'>
            <h1 className='contact-heading'>Contact Us</h1>
              <p className='contact-form-text'>
                We’re available for remote projects around the world.
                 </p>
            <form onSubmit={sendData} className="form__container-card">
                <div className="">
                    <input type="text" name="name" onChange={handleInputChange}
                     placeholder="Name" className="form-input">
                     </input>
                    
                </div>
                <div className="">
                <input type="email" name="email" onChange={handleInputChange}
                     placeholder="Email address" className="form-input">
                     </input>
                     
                </div>
                <div className="">
                     <input type="text" name="subject" onChange={handleInputChange}
                     placeholder="Subject" className="form-input">
                     </input>
                     
                </div>
                <div className="">
                    <textarea type="text" name="message" onChange={handleInputChange}
                     placeholder="Message" className="form-input">
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

