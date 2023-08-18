import React, { useEffect } from 'react'
import StarsCanvas from '../Starts'
import { Typewriter } from 'react-simple-typewriter'
import About from '../About'

type Props = {}

const Main = (props: Props) => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slideleft");
        } else {
          entry.target.classList.remove("slideleft");
        }
      });
    });

    const hiddenElements = document.querySelectorAll("section");

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);







  return (

    <div className={`w-full h-[93vh]`}>
        <div className={`w-full 1000:w-[900px] h-auto z-0 m-auto p-[5px] 300:p-[10px] 550:p-[15px] 1000:p-0`}>
              <StarsCanvas />
              <section className={`w-full h-[93vh] frc`}>
                <div className={`w-full h-auto fcc items-start`}>
                  <span className='text-teal-400 text-[20px]'>Hola,mi nombre es,</span>
                  <h1 className='text-[30px] 500:text-[40px] 760:text-[45px] font-bold'>
                    Saul Augusto Gasca Farrera .{" "}
                  </h1>
                  <h1 className='text-[30px] 500:text-[40px] 760:text-[45px] font-bold'>
                      <Typewriter 
                        words={["Desarollor de aplicaciones web."]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={2000}
                      
                      />
                  </h1>
                  <p className='text-[16px] monospace 500:text-[18px] 760:text-[20px]'>

                    Tengo experiencia como <span className='text-teal-400'> desarollador web </span>
                    y  como desarollador de aplicaciones interactivas como <span className='text-sky-500'>videojuegos y realidad aumentada </span>
                    teniendo un conocimiento amplio en el uso de motores como <span className='text-orange-600'>Unity y Unreal Engine, </span> mi experiencia me ha permitido
                    desarollar aplicaciones integrando diferentes tecnologias como lo son <span className='text-teal-400'> Bases de Datos, </span> diefrentes apis como <span className='text-orange-600'> OpenAI </span>
                    etc... , constantemente me encuentro mejorando mis habilidades para  crear software que sea escalable y eficiente.

                  </p>
                  <div className='px-[35px] select-none py-[12px] border hover:scale-110 transition-all duration-75 cursor-pointer border-teal-400 mt-[30px] rfc justify-center   rounded-[5px]'>
                      <a className='text-teal-400'>
                              Descargar CV
                      </a>
                  </div>
                </div>
              </section>
              <About />
        </div>
    </div>
    
  )
}

export default Main