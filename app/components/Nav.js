
"use client"
import { useState } from "react"
const Nav = () => {

    const [showNav, setShowNav] = useState(false)
  return (
    <nav className="flex justify-between bg-black text-white h-24">
       <div className="w-1/2 lg:w-3/5 p-4">Nav</div>
       <button className="absolute top-3 right-3 z-40" onClick={() => setShowNav(!showNav)}>
        <span className={`block transition-transform ease-in-out duration-700 ${showNav ? "rotate-180" : "-rotate-180"}`}>
            {showNav ? 'X' : 'M'}
        </span>
      </button>
     <ul
        className={`w-full h-screen flex flex-col lg:hidden justify-evenly bg-black absolute z-30 transition-transform ease-in-out duration-700 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
            <li><a href="#">link4</a></li>
        </ul> 

    </nav>
  )
}

export default Nav
