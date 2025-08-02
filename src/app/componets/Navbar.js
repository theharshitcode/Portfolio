import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between p-[20px] px-[70px] font-bold text-white bg-indigo-950">
        <div className="logo">
            <Link href="/">HS</Link>
        </div>
        <ul className="flex gap-[50px] ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
           <li>
            <Link href="/fiver">Fiver</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
           <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
