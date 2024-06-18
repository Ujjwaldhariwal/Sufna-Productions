// Contact.js

import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import './btn.css';
import './contact.css'; // Import the new CSS file
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';


const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3b6dd913-8563-4ba2-8161-cc8909ce39f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-32 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#f5f5f5] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4'
          >
            
            <h1 className='h1'>Contact Us</h1>
            {result === "Form Submitted Successfully" ? (
              <div className='flex flex-col gap-y-4 lg:items-center lg:justify-center'>
                <p className='text-lg font-semibold text-primary'>Form Submitted Successfully</p>

              </div>
            ) : (
              <form className='flex flex-col gap-y-4' onSubmit={onSubmit}>
                <div className='flex gap-x-10'>
                  <input
                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                    type='text'
                    name='name'
                    placeholder='Your name'
                    required
                  />
                  <input
                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                    type='email'
                    name='email'
                    placeholder='Your email address'
                    required
                  />
                </div>
                <textarea
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] resize-none'
                  name='message'
                  placeholder='Your message'
                  required
                ></textarea>
                <button className='button-sub' type='submit'>
                  Send it
                </button>
              </form>
            )}
            

            <div className='flex justify-center lg:hidden gap-x-4 mt-4'>
              <FaFacebookF className='social-icon1' />
              <FaInstagram className='social-icon2' />
              <FaYoutube className='social-icon3' />
            </div>
            <span>{result !== "Form Submitted Successfully" && result}</span>
          </div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src="https://i.ibb.co/374Gmng/dhr2.jpg" alt='Contact' className='woman-img' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
