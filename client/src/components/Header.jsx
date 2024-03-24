import React from 'react'
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector((state) => state.user);

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
            <Link to='/profile'>
                {
                  currentUser ? (
                    <img className='rounded-full h-7 w-7 object-cover' 
                         src={currentUser.avatar} 
                         alt='profile' />  
                  ) : (
                    <li className=' text-slate-700 hover:underline'> Sign in</li>
                  )
                }
            </Link>
            
        </ul>
      </div>
    </header>
  )
}
