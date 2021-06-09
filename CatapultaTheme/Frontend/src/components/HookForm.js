import React, { Fragment, useState, } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';
import { Button } from './Button';

const HookForm = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const [event, setData] = useState([]);

    const onSubmit = (data, e ) => {
        console.log(data)
        setData([
            ...event,
            data
        ])
        // clean the fields
        e.target.reset();
    }
  
    return (
        <Fragment>
          <div className='contact-container'>
             <h1 className='contact-heading'>
                 Contact Us
                 </h1>
               <p className='contact-form-text'>
                 We’re available for remote projects around the world.
                 </p>
               <form onSubmit={handleSubmit(onSubmit)} className="form__container-card" >
                  <input type="text" name="name"  placeholder="Name" className="form-input" 
                     {...register("Name", { required: true, maxLength: 20 })} />
                        <span className='contact-form-text'>
                             {errors.Name?.type === 'required' && "Name is required"}
                              </span>
     
                   <input type="email" name="email" placeholder="Email address" className="form-input"
                     {...register("email", { required: true })} />
                         <span className='contact-form-text'>
                              {errors.email?.type === 'required' && "Email is required"}
                               </span>

                   <input type="text" name="subject" placeholder="Subject" className="form-input"
                     {...register("subject", { required: true, minLength: 2 })} />
                         <span className='contact-form-text'>
                              {errors.subject?.type === 'required' && "This field is required"}
                               </span>
   
                  <textarea type="text" name="message" placeholder="Message" className="form-input"
                     {...register("message", { required: true, minLength: 10 })} />
                         <span className='contact-form-text'>
                              {errors.subject?.type === 'required' && "This field is required"}
                               </span>

                  <Button type="submit"  className='btn--primary'  buttonSize='btn--wide' buttonColor='pink'>
                    Send
                    </Button>
              </form>
         </div>
        </Fragment>
    );
}
 
export default HookForm;


  
         

    
