import "./styles.css";

import html from "./html.png";
import css from "./css.png";
import es6 from "./es6.png";
import react from "./react.png";
import {BsGithub,BsLinkedin} from 'react-icons/bs'


import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import logo from "./logo.svg";
import { useEffect, useRef } from "react";

import emailjs from 'emailjs-com';

export const Parallax = () => {
  const containerRef = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve the email and message values from the form
    const email = event.target.email.value;
    const message = event.target.message.value;

    // TODO: Perform any necessary validations or sanitization of the data

    // Initialize EmailJS with your user ID
    emailjs.init('ZYzT4par2ZFpEBLo6');

    // Prepare the email parameters
    const templateParams = {
      from_name: email,
      to_name: 'Ali Shahal', // Specify the recipient's name or email
      message: message,
    };

    // Send the email
    emailjs
      .send('service_scdhhra', 'template_c9oj3dh', templateParams)
      .then(
        function (response) {
          console.log('Email sent successfully:', response);
          // TODO: Show a success message to the user
          alert("We Have Recieved Your Email")
        },

        
        function (error) {
          console.error('Failed to send the email:', error);
          alert("sorry email not delivered")
        }
      );
     
      
      const userEmail = email;
      console.log(userEmail);
      const autoReplyParams = {
        to_email:userEmail,
        to_name: email,
        subject: 'Thank you for reaching out to us!',
        message: `Thank you for contacting us. We have received your message and appreciate your interest in our services. Our team is currently reviewing your inquiry and will get back to you as soon as possible.

        In the meantime, please feel free to explore our website for more information about our products and services. If you have any urgent questions, you can reach us at 7356323421 during our business hours.
        
        We value your time and patience and look forward to assisting you further.
        
        Best regards,
        Your Name`,
      };
  
      emailjs.send('service_scdhhra', 'template_c9oj3dh', autoReplyParams)
        .then(function(response) {
          console.log('Auto-reply email sent successfully:', response);
        })
        .catch(function(error) {
          console.error('Failed to send the auto-reply email:', error);
        });
    
    

    // Reset the form fields
    event.target.reset();
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);


  let hiText = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animation for the "Hi, I'm Ali" text
    gsap.from(hiText, {
      xPercent: -100,
      opacity: 0,
      duration: 2,
      ease: "power5.out",
      scrollTrigger: {
        trigger: hiText,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []); // <-- Add the closing curly brace for the useEffect here
  
  

  return (
    <>
      <nav>
        <img  src={logo} alt="logo" />
        <a className="navc" href="#home"> Home </a>
        <a className="navc" href="#skills"> Skills </a>
        <a className="navc" href="#contact"> Contact </a>
      </nav>
      <section id="home" className="banner">
        <div className="banner-content">
          <h2 ref={(el) => (hiText = el)}>Hi, I'm Ali</h2>

          <h3>Frontend Developer</h3>
        </div>
      </section>
      <div id="skills"  ref={containerRef} className="container">
          <section class="description panel blue">
      <img alt="logo" src={html} />
      <h2>HTML</h2>
      <p>
        HTML (Hypertext Markup Language) is the standard markup language used to create web pages. 
        It provides the structure and content of a web page, and it is essential for building any website 
        or web application. As an experienced developer, I have a deep understanding of HTML and its many 
        features and have used it extensively in my projects to create well-structured and semantic web pages.
      </p>
    </section>

    <section className="panel green">
        <img alt="logo" src={css} />
        <h2>CSS</h2>
        <p>
          CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document
           written in HTML. It is used to add visual style, layout, and design to web pages and user interfaces, 
           including colors, fonts, spacing, and more. CSS is an essential skill for any web developer, as it 
           allows you to create beautiful, responsive, and user-friendly websites and applications. 
           As an experienced developer, I have extensive knowledge of CSS and have used it to create visually 
           appealing and user-friendly web pages and applications.
        </p>
      </section>

      <section className="description panel blue">
        <img alt="logo" src={es6} />
        <h2>ES6</h2>
        <p>
          ES6 (ECMAScript 2015) is the latest version of the ECMAScript standard, which is the official name for 
          the JavaScript language. ES6 introduces many new features and syntax improvements to JavaScript, including
           arrow functions, classes, template literals, let and const variables, and more. These new features make
            JavaScript more powerful, flexible, and easier to write and maintain. As an experienced developer, 
            I have been using ES6 extensively in my projects.
        </p>
      </section>


      <section className="panel red">
        <img alt="logo" src={react} />
        <h2>React JS</h2>
        <p>
          React JS is a popular JavaScript library for building user interfaces. It allows you to create reusable 
          components and manage the state and rendering of your application in a declarative and efficient way. 
          React is widely used in modern web development, and it is supported by a large and active community of
           developers. As an experienced developer, I have built several projects using React and am proficient in
            its core concepts and features.
        </p>
      </section>
      </div>
      <section id="contact" className="footer">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Your email" required />
          <textarea rows="6" name="message" placeholder="Message" required></textarea>
          <button type="submit">Send Email</button>
        </form>

        <div className="icons">
        
        <a href="https://github.com/alishahal100" ><BsGithub className="git" style={{width:'50px',height:'25px',cursor:'pointer'}} /></a>
        <a href="https://www.linkedin.com/in/ali-shahal-a8a593234/" ><BsLinkedin className="lin" style={{width:'50px',height:'25px',cursor:'pointer'}} /></a>
        </div>

      </section>

      
    </>
    
  );
};