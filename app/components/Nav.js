"use client"
import { useState, useEffect } from "react";
import { motion,  useAnimationControls } from "framer-motion"


const variants = {
  open: { opacity: 1, x: "0%", width: "100%", height: "100%", transition: { type: "smooth", duration: 0.50 }, },
  closed: { opacity: 0, x: "100%", width: "0%", height: "0%", transition: { type: "smooth", duration: 0.75 } },
}

const Nav = () => {

    const [showNav, setShowNav] = useState(false)
    const navigationControls = useAnimationControls()

    useEffect(() => {

      if(showNav){

        document.body.style.overflowY = "hidden";
        navigationControls.start("open")

      } else {

        document.body.style.overflowY = "auto";
        navigationControls.start("closed")


      }

    }, [showNav])

  return (
    <nav className="flex justify-between bg-black text-white h-24 text-2xl">
       <div className="w-1/2 lg:w-3/5 p-4">
       <h2>NAV</h2>
       </div>
      <ul className="hidden lg:flex justify-evenly w-2/5 p-4">
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
            <li><a href="#">link4</a></li>
      </ul>
      <button className="flex lg:hidden absolute top-3 right-3 z-40" onClick={() => setShowNav(!showNav)}>
        <span className={`block  transition-transform ease-in-out duration-700 ${showNav ? "rotate-180" : "-rotate-180"}`}>
            {showNav ? 'X' : 'M'}
        </span>
      </button>
      <motion.div  initial="closed"
                variants={variants}
                animate={navigationControls}
                style={{ position: 'fixed', top: 0, right: 0, zIndex: 30 }}
                className="flex text-white"
                
>
     <div className="flex-1 bg-black bg-opacity-50" onClick={() => setShowNav(!showNav)}></div>
     <ul
        className="flex-1 bg-black flex flex-col items-center justify-evenly" 
      >
            <li><a href="#" >link1</a></li>
            <li><a href="#" >link2</a></li>
            <li><a href="#" >link3</a></li>
            <li><a href="#" >link4</a></li>
        </ul> 
        </motion.div>
    </nav>
  )
}

export default Nav
