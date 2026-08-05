import React, { useEffect } from 'react'
import './Hero.css'
import img from '../images/image.png'
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import AOS from "aos";
function Hero() {
 
      useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <section style={{backgroundColor:"#050816",width:"100%"}} >
  
  <div className="container">
  <div className="row align-items-center min-vh-100">

    <div className="col-lg-6 text-light"
     data-aos="fade-right"
    >
    <h5>
  👋 Hello, I'm
</h5>
     <h1>Jamal Helal</h1>
         <h3>
      {" "}
      <span>
        <Typewriter
          words={[
            "Full Stack Developer",
            "Front Developer",
            "Backend Developer",
           
          ]}
          loop={0} // 0 = تكرار لا نهائي
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h3>
    
     <p>I specialize in developing modern web applications with a strong focus on performance, scalability, and user experience. From intuitive frontend interfaces to robust backend systems, I build solutions that are both reliable and visually engaging.</p>
    </div>

   <div className="col-lg-6 imagee"
    data-aos="fade-left"
   >

  

        <img src={img} alt="Jamal" className='foto' />

       

    

</div>
    
  </div>
</div>
  </section>
  )
}
  
export default Hero
