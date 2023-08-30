import React, { Suspense } from 'react'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { Canvas } from '@react-three/fiber'
import { BoxGeometry, SphereGeometry } from 'three'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

type Props = {}

const About = (props: Props) => {


  const computer = useGLTF("./desktop_pc/scene.gltf");

  const variants = {
    initial: { opacity: 0 },
    active: { opacity: 1 },
  };

  return (
    <div className='w-full h-[93vh] frc justify-center overflow-hidden'>
        <div className='w-full h-auto m-auto'>
          <motion.div className='w-full' variants={variants}>
            <div className='w-full h-[60px] flex flex-row items-center'>
                <span>
                    <Typewriter 
                      words={['S O B R E  M í']}
                      loop={10}
                      cursor
                      cursorStyle="<"
                      typeSpeed={100}
                      deleteSpeed={60}
                      delaySpeed={2000}

                    />
                  </span>
                  <div className="w-[350px] h-[1px] hidden 600:flex bg-teal-500 ml-[5px] mt-[5px]"></div>
            </div>
              
          </motion.div>


         

          <motion.p 
            variants={fadeIn("","",0.1,1)}
            className='mt-4 leading-[30px] monospace text-[16px] 800:text-[20px]'
          >

              Tengo <span className='text-green-400'> 29 años </span>y Estudié Ingeniería de Software y Sistemas Computacionales en{" "}
              <span className=" text-yellow-500 ">La Universidad De La Salle Bajío</span> 2016-2020 y{" "}
              actualmente me encuentro estudiando la Maestría en Desarrollo y Programación para Videojuegos en{" "} 
              <span className=" text-cyan-500">Coco School México</span> 2023-2025.{" "}
              

          </motion.p>


          <motion.p 
            variants={fadeIn("","",0.1,1)}
            className='mt-4 leading-[30px] monospace text-[16px] 800:text-[20px]'
          >

              Los idiomas que hablo son Español <span className='text-rose-600'> 100% </span> e Inglés <span className='text-rose-600'> 50% </span>.

          </motion.p>


          <motion.p 
            variants={fadeIn("","",0.1,1)}
            className='mt-4 leading-[30px] monospace text-[16px] 800:text-[20px]'
          >

Me considero alguien entusiasta por la tecnología y autodidacta, ya que muchos de los conocimientos y resolución de problemas los obtengo de 
          <span className='text-green-500'> Google </span>, <span className='text-yellow-500'> Stack Overflow </span> y <span className='text-rose-500'> YouTube </span>, así como de otras fuentes de información, 
          para mejorar mis habilidades como programador.

          </motion.p>

          {/* <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-4  text-[19px]  leading-[30px]  fcc items-start "
          id="font"
        >
          <p className="text-[15px] monospace 550:text-[15px] 800:text-[20px] hidden 500:inline ">
            Los idiomas que hablo son Español <span className='text-rose-600'> 100% </span> e Inglés <span className='text-rose-600'> 50% </span>.
          </p>
          <p className="text-[15px] monospace 550:text-[15px] 800:text-[20px] mt-[15px] hidden 500:inline ">
          Me considero alguien entusiasta por la tecnología y autodidacta, ya que muchos de los conocimientos y resolución de problemas los obtengo de 
          <span className='text-green-500'> Google </span>, <span className='text-yellow-500'> Stack Overflow </span> y <span className='text-rose-500'> YouTube </span>, así como de otras fuentes de información, 
          para mejorar mis habilidades como programador.
          </p>
          
        </motion.p> */}



          <motion.div className='h-[350px]'>

                    <Canvas 
                    className='mt-8'
                    camera={{ position: [20, 3, 5], fov: 25 }}>

                        <OrbitControls
                            
                            enableZoom={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                            
                            
                            />

                            <Suspense>

                                  <mesh>
                                  
                                  <ambientLight intensity={1} />
                                  <primitive object={computer.scene} scale={0.85} />
                                </mesh>

                            </Suspense>

                            <Preload all />
                        
                    </Canvas>
                      
          </motion.div>
        
          
       
        </div>
    </div>
  )
}

export default SectionWrapper(About, "About");