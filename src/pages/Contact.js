import React, { useContext } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import "./btn.css";
import "./contact.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleEmailClick = () => {
    window.location.href = "mailto:business@sufnaproductions.com";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/919779426400";
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container mx-auto h-full px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row h-full items-center justify-between pt-20 lg:pt-32 gap-x-8">
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear from you. Reach out to us through email or
                WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
                <button className="btn-abu" onClick={handleEmailClick}>
                  <div>Email Us</div>
                </button>
                <button className="btn-abu" onClick={handleWhatsAppClick}>
                  <div>WhatsApp</div>
                </button>
              </div>
              <div className="flex justify-center lg:justify-start gap-x-6 mt-8">
                <a
                  href="https://www.facebook.com/people/Sufna-Productions/61550937880697/?mibextid=LQQJ4d"
                  className="hover:opacity-75 transition-opacity"
                >
                  <FaFacebookF className="social-icon1" />
                </a>
                <a
                  href="https://www.instagram.com/sufna.productions/"
                  className="hover:opacity-75 transition-opacity"
                >
                  <FaInstagram className="social-icon2" />
                </a>
                <a
                  href="https://www.youtube.com/@Sufna.Productions"
                  className="hover:opacity-75 transition-opacity"
                >
                  <FaYoutube className="social-icon3" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sufnaproductions/"
                  className="hover:opacity-75 transition-opacity"
                >
                  <FaLinkedin className="social-icon4" />
                </a>
              </div>
            </div>
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ transition: transition1, duration: 1.5 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            />
            <img
              src="https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/dhr2.png?updatedAt=1721991035408"
              alt="Contact"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
        {/* </motion.div> */}
      </motion.section>
    </>
  );
};

export default Contact;
