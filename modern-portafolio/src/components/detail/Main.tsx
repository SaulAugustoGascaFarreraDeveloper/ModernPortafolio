import React from 'react'
import StarsCanvas from '../Starts'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className={`w-[1000px] h-[93vh] m-auto z-0`}>
        <StarsCanvas />
    </div>
  )
}

export default Main