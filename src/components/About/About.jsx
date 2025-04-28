import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/myPic.png'
const About = () => {
  return (
     <section 
     id='about'
     className=' px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12'
     >

      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
             <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-1 leading-tight'>
              Hi, I am
             </h1>
             {/* name */}
             <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-1 leading-tight'>
              Md Atik Hasan
             </h1>

             {/* skills heading with typing effect */}
             <h3 className='text sm:text-2xl md:text-32xl font-semibold mb-4 text-[#8245ec] leading-tight'>
              <span className='text-white'>
                I am a&nbsp;  
              </span>
              <ReactTypingEffect 
              text={[
                ' Front-end Developer',
                ' UI/UX designer',
                ' Programmer'
                
              ]}

              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer = {(cursor)=>{
                <span className='text-[#8245ec] '>{cursor}</span>
              }}
              />


             </h3>
             {/* about me paragraph */}
             <p className='text-sm sm:text-sm md:text-sm text-gray-400 mb-10 mt-1 leading-relaxed '>I am a passionate programmer with expertise in 
              front-end development. My skills in HTML, CSS, JavaScript, 
              and React help me build responsive and user-friendly 
              web applications. As a UI/UX designer, I focus on creating 
              intuitive and aesthetically pleasing designs. I am dedicated 
              to crafting seamless user experiences through clean, efficient code. 
              My goal is to bridge the gap between design and functionality to
               deliver impactful solutions</p>

               {/* resume button */}
               <a href='#'
               target='_blank'
               rel='noopener noreferrer'
               className='inline-block text-white py-1.5 mb-3 px-8 rounded-full mt-1 text-lg font-bold transition duration-300  transform scale-105'
               style={{
                background: 'linear-gradient(90deg, #8245ec , #a855f7',
                boxShadow: '0 0 2px #8245ec , 0 , 0 2px #8245ec , 0 0 , 40px #8245ec'
               }}
               >
                DOWNLOAD CV
               </a>

             
        </div>
        {/* right side */}
       


<div className='md:w-1/2 flex justify-center md:justify-end'>
<Tilt
  className='w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-purple-700 overflow-hidden shadow-lg'
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1000}
  gyroscope={true}
>
  <img 
    src={profileImage} 
    alt='atik hasan'
    className='w-full h-full object-cover object-[0%_25%]'
  />
</Tilt>

 
</div>



      </div>

     </section>
  )
}

export default About
