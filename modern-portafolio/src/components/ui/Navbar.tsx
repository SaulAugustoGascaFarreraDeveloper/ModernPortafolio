import React from 'react'
import { Link } from 'react-router-dom'
import { VscTriangleRight, VscTriangleUp } from "react-icons/vsc";
import Darkmode from '../Darkmode';

export const Navbar = () => {
  return (
    <div className={`w-full h-[7vh] shadow-lg flex flex-row items-center justify-between z-[999] shadow-cyan-500/50`}>
       

       <Link
        to={"/"}
        className="w-[50px] 800:w-[65px] z-[999] h-auto animate-Fastspin   frc ml-[10px] 500:ml-[20px] cursor-pointer hover:animate-slowspin overflow-hidden"
      >
        <img src="/reactquery.png" />
      </Link>

            <div className={` w-auto z-[999]  800:w-[500px] group h-[60px] animate-slidedown  rounded-[5px] text-[18px] frc justify-between select-non`}>
                
                <div className={`w-full h-full hidden 800:flex frc justify-around`}>

                        <a href='/' className='w-auto h-auto frc monospace text-orange-700 hover:scale-125 transition-all duration-75 cursor-pointer'>
                            About
                        </a>

                        <a href='/' className='w-auto h-auto frc monospace text-orange-700 hover:scale-125 transition-all duration-75 cursor-pointer'>
                            Skills
                        </a>

                        <a href='/' className='w-auto h-auto frc monospace text-orange-700 hover:scale-125 transition-all duration-75 cursor-pointer'>
                            Projects
                        </a>

                        <a href='/' className='w-auto h-auto frc monospace text-orange-700 hover:scale-125 transition-all duration-75 cursor-pointer'>
                            Contact
                        </a>

                </div>

               

                
                
                
            </div>


            <div className='w-auto h-auto frc relative flex'>

                <div className="mr-[10px] 500:mr-[20px] frc">
                <Darkmode />
                       
                </div>

                <div
                    className={`w-[35px] h-auto  group mr-[10px] 500:mr-[20px] cursor-pointer animate-slideright`}
                >
                    <h2>dsfgggfdf</h2>
                </div>

            </div>
    </div>
  )
}
