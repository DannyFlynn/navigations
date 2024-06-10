"use client"
import { useState, useEffect } from "react"
const Nav = () => {

    const [showNav, setShowNav] = useState(false)

    useEffect(() => {

      if(showNav){

        document.body.style.overflowY = "hidden";

      } else {

        document.body.style.overflowY = "auto";


      }

    }, [showNav])

  return (
    <nav className="flex justify-between bg-black text-white h-24 text-2xl">
       <div className="w-1/2 lg:w-3/5 p-4">
       <h2 className="ml-12">NAV</h2>
       </div>
      <ul className="hidden lg:flex justify-evenly w-2/5 p-4">
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
            <li><a href="#">link4</a></li>
      </ul>
      <button className="flex lg:hidden absolute top-3 left-3 z-40" onClick={() => setShowNav(!showNav)}>
        <span className={`block  transition-transform ease-in-out duration-700 ${showNav ? "rotate-180" : "-rotate-180"}`}>
            {showNav ? 'X' : 'M'}
        </span>
      </button>
      <button className="flex lg:hidden absolute top-3 right-3">
        <span>
            Basket
        </span>
      </button>
      <div className={`w-full h-screen flex lg:hidden  absolute z-30 transition-transform ease-in-out duration-700 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}>
     <ul
        className="w-2/3 bg-black flex flex-col items-center justify-evenly" 
      >
            <li><a href="#" >link1</a></li>
            <li><a href="#" >link2</a></li>
            <li><a href="#" >link3</a></li>
            <li><a href="#" >link4</a></li>
        </ul> 
        <div className="w-1/3 bg-black bg-opacity-50" onClick={() => setShowNav(!showNav)}></div>
        </div>
    </nav>
  )
}

export default Nav
