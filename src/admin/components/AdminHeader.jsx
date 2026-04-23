import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header top */}
    <div className="flex justify-between items-center p-3 md:px:20">
      {/* logo */}
      <div className='flex items-center'>
          <img width= {'50px'} height={'50px'} src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="golo" />
          <h1 className='text-2xl font-bold ms-2 '>BOOKSTORE</h1>
        </div>
        {/* Logout */}
        <button className="flex items-center px-3 py-2 bg-black text-white rounded border border-black hover:bg-white hover:text-black">Logout<FaPowerOff className='ms-2'/></button>
    </div>
    {/* header marque */}
    <div className="w-full p-3 bg-black text-white">
      <marquee>Welcome Admin, Your all set to manage and Monitor the System. let's get into work!!!! </marquee>
    </div>
    </>
  )
}

export default AdminHeader