import React from 'react'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full h-[93vh] frc justify-center overflow-hidden'>
        <div className='w-full h-auto m-auto'>
          <motion.div className='w-full '>
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
        </div>
    </div>
  )
}

export default About