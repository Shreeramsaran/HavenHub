import React from 'react'
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className='bg-gray-200 shadow-sm'>
      <div className='justify-around items-center flex mx-auto p-3' >
        <Link to={"/"}>
           <h1 className='font-bold text-sm sm:text-lg'>HavenHub</h1>
        </Link>
        <form className='bg-slate-100 flex items-center mx-auto p-3 rounded-lg'>
           <input 
               type="text"
               placeholder='Search..' 
               className='bg-transparent focus:outline-none w-24 sm:w-64'
               />
           <FaSearch/>
        </form>
        <ul className='flex gap-4'>
            <Link to={"/home"}>
                <li className='hidden sm:inline hover:underline'>Home</li>
            </Link>
            <Link to={"/about"}>
                 <li className='hidden sm:inline hover:underline'>About</li>
            </Link>
            <Link to={"/sign-in"}>
                 <li className='hover:underline'>SignIn</li>
            </Link>
        </ul>
      </div>
    </header>
  )
}
