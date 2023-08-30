import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { SectionWrapper } from '../hoc'

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="skills" className='w-full h-auto 400:h-[93vh] frc justify-center mb-[10px] 400:mb-[60px] 500:my-0 mt-8'>

        <div className='w-full h-full fcc items-start justify-center'>


                <div className='w-full h-[60px] flex flex-row items-center'>
                    <span className=' text-[25px] mr-[10px] font-bold'>Habilidades</span>
                    <div className="w-[350px] h-[1px] hidden 600:flex bg-teal-500 mt-[5px]"></div>
                </div>


                <div className='w-full h-auto rounded-[5px] fcc items-start cursor-pointer bg-[#282A36] mb-[15px]'>

                    <div className='w-full h-[60px] frc justify-start p-[18px]'>
                            <BsCircleFill className="text-rose-500 mr-[8px]" />
                            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
                            <BsCircleFill className="text-[#27C83F]" />
                    </div>

                    <div className='w-full h-auto fcc items-start'>
                            <span className='w-full h-auto px-[18px] text-[17px] text-white'>
                                    <span
                                     id='font'
                                     className='text-red-500 font-bold text-[13px] 550:text-[15px] 800:text-[16px]'
                                    >
                                        
                                        {" "}
                                        const{" "}

                                    </span>
                                    
                                    <span 
                                        id="font"
                                        className='text-teal-400 font-bold text-[13px] 550:text-[15px] 800:text-[16px]'
                                    >
                                        FrontEnd
                                        
                                    </span>{" "}

                                    <span className=" text-orange-600">=</span>
                                    <span className=" text-blue-500"> [ </span>{" "}
                                    <span id='font' className='text-teal-400 text-[17px]  sm:text-[4px]'>

                                            <Typewriter 
                                            
                                                words={["Html, CSS , Javascript, Tailwind, ReactJS, NextJS" ]}
                                                loop={true}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={45}
                                                deleteSpeed={50}
                                                delaySpeed={4000}
                                            />

                                    </span>
                                    <span className=" text-blue-600">]</span>
                            </span>

                            <div className='w-full h-auto frc justify-around flex-wrap p-[18px]'>
                                    <div className='w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0'>
                                        <img src="/html.png" />
                                    </div>
                                    <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/css.png" />
                                    </div>
                                    <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/tailwind.png" />
                                    </div>
                                    <div className="w-[35px] h-auto group hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/js.png" />
                                    </div>
                                    <div className="w-[40px] h-auto group  hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0 ">
                                        <img
                                        src="/react.png"
                                        className="group-hover:animate-Fastspin"
                                        />
                                    </div>
                                    

                            </div>
                    </div>

                </div>


                {/* Backend section */}


                <div className='w-full h-auto rounded-[5px] fcc items-start cursor-pointer bg-[#3d3d43] mb-[15px]'>

                    <div className='w-full h-[60px] frc justify-start p-[18px]'>
                            <BsCircleFill className="text-rose-500 mr-[8px]" />
                            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
                            <BsCircleFill className="text-[#27C83F]" />
                    </div>

                    <div className='w-full h-auto fcc items-start'>
                            <span className='w-full h-auto px-[18px] text-[17px] text-white'>
                                    <span
                                     id='font'
                                     className='text-red-400 font-bold text-[13px] 550:text-[15px] 800:text-[16px]'
                                    >
                                        
                                        {" "}
                                        const{" "}

                                    </span>
                                    
                                    <span 
                                        id="font"
                                        className='text-teal-400 font-bold text-[13px] 550:text-[15px] 800:text-[16px]'
                                    >
                                        BackEnd
                                        
                                    </span>{" "}

                                    <span className=" text-orange-600">=</span>
                                    <span className=" text-blue-500"> [ </span>{" "}
                                    <span
                                        id="font"
                                        className="text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px]"
                                    >
                                        {" "}
                                        Nodejs <span className=" text-white"></span>
                                        <span className=" text-white"> ,</span> NextJS{" "}
                                        <span className=" text-white"> , </span> SQL
                                        <span className=" text-white"> , </span> MongoDB

                                    </span>
                                    <span className=" text-blue-600">]</span>
                            </span>

                            <div className='w-full h-auto frc justify-around flex-wrap p-[18px]'>
                                    <div className='w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0'>
                                        <img src="/nodejs.png" />
                                    </div>
                                    <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/next.png" />
                                    </div>
                                    <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/mysql.png" />
                                    </div>
                                    <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/mongodb.png" />
                                    </div>
                                    

                            </div>
                    </div>

                </div>

                {/*Game Engines*/}


                <div className='w-full h-auto rounded-[5px] fcc items-start cursor-pointer bg-[#282A36] mb-[15px]'>

                    <div className='w-full h-[60px] frc justify-start p-[18px]'>
                            <BsCircleFill className="text-rose-500 mr-[8px]" />
                            <BsCircleFill className="text-[#FEBC2E] mr-[8px]" />
                            <BsCircleFill className="text-[#27C83F]" />
                    </div>

                    <div className='w-full h-auto fcc items-start'>
                            <span className='w-full h-auto px-[18px] text-[17px] text-white'>
                                    <span
                                     id='font'
                                     className='text-red-500 font-bold text-[13px] 550:text-[15px] 800:text-[16px]'
                                    >
                                        
                                        {" "}
                                        const{" "}

                                    </span>
                                    
                                    <span 
                                        id="font"
                                        className='text-teal-400 font-bold text-[13px] 550:text-[15px] 800:text-[16px]'
                                    >
                                        GameEngines
                                        
                                    </span>{" "}

                                    <span className=" text-orange-600">=</span>
                                    <span className=" text-blue-500"> [ </span>{" "}
                                    <span
                                        id="font"
                                        className="text-teal-400  text-[13px] 550:text-[15px] 800:text-[16px]"
                                    >
                                        {" "}
                                        " Unity / C# " <span className=" text-white"></span>
                                        <span className=" text-white"> ,</span>" Unreal Engine / C++ "{" "}
                                      

                                    </span>
                                    <span className=" text-blue-600">]</span>
                            </span>

                            <div className='w-full h-auto frc justify-around flex-wrap p-[18px]'>
                                    <div className='w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0'>
                                        <img src="/unity.png" />
                                    </div>
                                    <div className="w-[50px] h-auto hover:animate-ping transition-all duration-75 cursor-pointer m-[10px] mb-0  ">
                                        <img src="/unreeal.png" />
                                    </div>
                                    
                                    

                            </div>
                    </div>

                </div>
                

        </div>
            

           
    </section>
  )
}


export default SectionWrapper(Skills, "Skills");
//export default Skills