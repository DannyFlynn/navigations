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
    <nav className="flex justify-between bg-black text-white h-24">
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
        <span className={`block transition-transform ease-in-out duration-700 ${showNav ? "rotate-180" : "-rotate-180"}`}>
            {showNav ? 'X' : 'M'}
        </span>
      </button>
      <div className={`w-full h-screen flex lg:hidden  absolute z-30 transition-transform ease-in-out duration-700 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}>
     <div className="w-1/2 bg-black bg-opacity-50" onClick={() => setShowNav(!showNav)}></div>
     <ul
        className="w-1/2 bg-black"
      >
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
            <li><a href="#">link4</a></li>
        </ul> 
        </div>
    </nav>
  )
}

export default Nav
