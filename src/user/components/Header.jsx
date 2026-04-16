import React, { useState } from 'react'
import { FaBars, FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Header() {
  const [toggle,setToggle]= useState(false)
  return (
    <>
      {/* Header top part */}
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className='flex items-center'>
          <img width= {'50px'} height={'50px'} src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="golo" />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOKSTORE</h1>

        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOK STORE</h1>
        </div>
        {/* Login*/}
        <div className='md:flex items-center justify-end hidden'>
          <FaInstagram/>
          <FaTwitter className='mx-1'/>
          <FaFacebookSquare/>
          <Link to ={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white '><FaUser className='me-1'/>Login
          </Link>
          
        </div>
      </div>
      {/* navigation Part  */}
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center'>
        {/* menu &login @small screen  */}
        <div className='flex justify-between items-center  text-2xl md:hidden'>
          <button onClick={()=>setToggle(!toggle)}>
            <FaBars/>
          </button>
           <Link to ={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white '><FaUser className='me-1'/>Login
          </Link>

        </div>
        <ul className={toggle?'flex flex-col ':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>CONTACT</Link></li>

        </ul>

      </nav>
    </>
  )
}

export default Header