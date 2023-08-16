import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/ui/Navbar';
import { useSelector } from "react-redux";
import { darkmodeC } from './settings/actionslice';
import { Canvas } from '@react-three/fiber';
import Main from './components/detail/Main';

function App() {

  const darkLight = useSelector(darkmodeC)

  return (
    <>



   


    <div className={`w-full h-screen ${
      darkLight ? "bg-[#191F2F] text-slate-100" : "bg-[#eee] text-gray-700"
    } `}>

      <Navbar />




      <div
        id="cutomscoll"
        className="w-full h-[93vh] frc justify-between  relative  z-0 overflow-y-scroll overflow-x-hidden scroll-smooth "
      >
        
       <Main />
        
      </div>
      
    

      

    </div>

    


    

    
    
    </>
    
  );
}

export default App;
