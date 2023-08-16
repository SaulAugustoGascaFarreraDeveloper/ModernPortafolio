import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkmodeC, startmodeC, startmodeEngin } from '../settings/actionslice'
import { BsStars } from 'react-icons/bs'
import { GiBeveledStar } from "react-icons/gi";

type Props = {}

const StartMode = (props: Props) => {

    const startmodeopen = useSelector(startmodeC)
    const darkLight = useSelector(darkmodeC)
    const dispatch = useDispatch()

  return (
    <div className={`${darkLight ? "bg-cyen-500/50" : ""} Header-icon mr-[15px] hover:bg-slate-200 animate-slowfade shadow-lg hover:scale-100 z-[99999] cursor-pointer`}>
        {startmodeopen ? (
            <BsStars 

                onClick={() => dispatch(startmodeEngin(false))}
                className='text-cyan-400 text-[22px] hover:scale-125 transition-all duration-150'
            
            />
        ) :(
            <GiBeveledStar 

                onClick={() => dispatch(startmodeEngin(true))}
                className='text-cyan-400 text-[22px] hover:scale-125 transition-all duration-150'
            
            />
        )}
    </div>
  )
}

export default StartMode