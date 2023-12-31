import React,{useEffect,useRef,FC,useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import { VscTriangleRight, VscTriangleUp } from "react-icons/vsc";
import Darkmode from '../Darkmode';
import { darkmodeC, musicmodeC } from '../../settings/actionslice';
import MusicMode from '../MusicMode';
import { Canvas } from '@react-three/fiber';
import StartMode from '../StartMode';



interface Props{
    hidden?: boolean
}


export const Navbar : FC<Props> = ({hidden}) => {

    const darkLight = useSelector(darkmodeC)
    const music_mode = useSelector(musicmodeC)
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [pathName,setPathName] = useState("")


    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    useEffect(() => {

        if(music_mode === true && audioRef.current)
        {
            //playAudio()

          
            setTimeout(() => {

                playAudio()
    
            },10000)
            
            
        }

    },[music_mode])


    useEffect(() => {

        if(window !== undefined)
        {
            window.addEventListener("hashchange",() => {
                const pathname = window.location.hash
                setPathName(pathname)
            })
        }

    },[])


    const isActive = pathName?.split("#").pop()

  return (
    <div
      className={`w-full h-[7vh]      shadow-lg ${
        darkLight ? "shadow-cyan-500/50" : ""
      }   flex flex-row items-center justify-between  z-[999] `}
    >
      {" "}
      {music_mode === true ? (
        <audio
          ref={audioRef}
          src="/sounds/music.mp3"
          loop
          autoPlay
        />
      ) : (
        ""
      )}
      <Link
        to={"/"}
        className="w-[50px] 800:w-[65px] z-[999] h-auto animate-Fastspin   frc ml-[10px] 500:ml-[20px] cursor-pointer hover:animate-slowspin overflow-hidden"
      >
        <img src="/reactquery.png" />
      </Link>
      <div
        className={`  w-auto z-[999]  800:w-[500px] group h-[60px] animate-slidedown  rounded-[5px] text-[18px] frc justify-between select-non"`}
      >
        <div className={` w-full h-full hidden 800:flex frc justify-around `}>
          <a
            href="#About"
            className={`w-auto h-auto frc monospace ${
              hidden === true ? " hidden " : ""
            } ${
              isActive === "About" ? "text-teal-400 scale-110" : ""
            }  hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer   `}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "About" ? " animate-slowfade" : "hidden"
              }`}
            />
            About
          </a>
          <a
            href="#Skills"
            className={`w-auto h-auto frc monospace ${
              hidden === true ? " hidden " : ""
            } ${
              isActive === "Skills" ? "text-teal-400 scale-110" : ""
            }  hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "Skills" ? "animate-slowfade" : "hidden"
              }`}
            />{" "}
            Skills
          </a>
          <a
            href="#Projects"
            className={`w-auto h-auto frc monospace ${
              hidden === true ? " hidden " : ""
            } ${
              isActive === "Projects" ? "text-teal-400 scale-110" : ""
            } hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "Projects" ? "animate-slowfade" : "hidden"
              }`}
            />{" "}
            Projects
          </a>
          <a
            href="#Contact"
            className={`w-auto h-auto frc monospace ${
              hidden === true ? " hidden " : ""
            } ${
              isActive === "Contact" ? "text-teal-400 scale-110" : ""
            } hover:text-teal-400 hover:scale-125 transition-all duration-75 cursor-pointer`}
          >
            <VscTriangleRight
              className={` text-orange-500 ${
                isActive === "Contact" ? "animate-slowfade" : "hidden"
              }`}
            />{" "}
            Contact
          </a>
        </div>

        <div className="w-auto h-auto frc relative flex 800:hidden  ">
          <div className="mr-[10px] 500:mr-[20px] frc  ">
            <MusicMode />
            <StartMode />
            <Darkmode />
          </div>
              <div
                className={`w-[35px] h-auto  group mr-[10px] 500:mr-[20px] cursor-pointer animate-slideright`}
              >
                <img src="/sidebar.svg" className="w-full" />
              </div>
          <div
            className={` ${
              darkLight ? "bg-[#10141e]" : "bg-[#EEEEEE]"
            }  z-50  shadow-lg hidden group-hover:flex fcc w-[180px] 500:w-[200px] h-[250px] mr-[5px] 500:mr-[15px]  animate-slowfade3 rounded-[10px] absolute right-0 bottom-[-260px] z-[999]
            `}
          >
            <div className=" absolute right-0 top-[-16px] mr-[9px] ">
              <VscTriangleUp
                className={` text-[25px] ${
                  darkLight ? "text-[#10141e]" : "text-[#e0e0e0]"
                }   `}
              />
            </div>
            <div className="w-full h-full overflow-hidden ">
              <a
                href="#About"
                className={`w-full h-[60px] monospace frc justify-center text-[16px] 500:text-[19px] ${
                  isActive === "About" ? "text-orange-500 " : ""
                } hover:text-teal-400 cursor-pointer ScaleAnimation `}
              >
                About
              </a>
              <a
                href="#Skills"
                className={` ${
                  isActive === "Skills" ? "text-orange-500 " : ""
                } monospace w-full h-[60px] frc justify-center text-[16px] 500:text-[19px] hover:text-teal-400 cursor-pointer ScaleAnimation`}
              >
                Skills
              </a>
              <a
                href="#Projects"
                className={` ${
                  isActive === "Projects" ? "text-orange-500 " : ""
                } monospace w-full h-[60px] frc justify-center text-[16px] 500:text-[19px] hover:text-teal-400 cursor-pointer ScaleAnimation`}
              >
                Projects
              </a>
              <a
                href="#Contact"
                className={`${
                  isActive === "Contact" ? "text-orange-500 " : ""
                } monospace w-full h-[60px] frc justify-center text-[16px] 500:text-[19px] hover:text-teal-400 cursor-pointer ScaleAnimation `}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-[38px] hidden 800:flex">
        <MusicMode />
        <StartMode />

        <Darkmode />
      </div>
    </div>
  )
}
