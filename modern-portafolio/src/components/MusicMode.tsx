import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkmodeC, musicmodeC, musicmodeEngin } from '../settings/actionslice'
import { FcMusic } from "react-icons/fc";
import { HiOutlinePlay } from "react-icons/hi2";

type Props = {}

function MusicMode({}: Props) {

  const dispatch = useDispatch()
  const darkLight = useSelector(darkmodeC)
  const musicmode_open = useSelector(musicmodeC)

  useEffect(() => {
    dispatch(musicmodeEngin(true))
  },[])


  return (
    <>

<div
    className={`Header-icon mr-[15px] hover:bg-slate-200 animate-slowfade shadow-lg ${
      darkLight ? "shadow-cyan-500/50" : ""
    } hover:scale-100 z-[99999] cursor-pointer `}
  > 
    
    {musicmode_open ? (
      <FcMusic        
        onClick={() => dispatch(musicmodeEngin(false))}
        className=" animate-pulse   text-cyan-400 text-[22px] ml-[3px] hover:scale-125 transition-all duration-150"
      />
    ) : (
      <HiOutlinePlay       
        onClick={() => dispatch(musicmodeEngin(true))} 
        className=" text-cyan-400 text-[22px] hover:scale-125 transition-all duration-150"
      />
    )}
  </div>
    
    </>
  )
}

export default MusicMode