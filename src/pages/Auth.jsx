import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  const[togglePassWordType,setTogglePasswordType] = useState(false)
  return (
    <div>
      <div className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
        <div className='p-10'>
          <h1 className="text-center font-bold text-3xl">BOOK STORE</h1>
          <div style={{width:'400px'}} className="bg-black text-white p-5 flex justify-center items-center flex-col my-5">
            <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
              <FaUser className='text-3xl'/>
            </div>
            <h1 className='text-2xl'>{insideRegister?"Register":"Login"}</h1>
            <form className="my-5 w-full">
              {/* userName */}
              {insideRegister && 
              <input className='bg-white p-2 w-full rounded my-5 text-black' type="text" placeholder='Username' />
              }
              {/* email */}
              <input className='bg-white p-2 w-full rounded mb-5 text-black' type="text" placeholder='E mail' />

              {/* passWord */}
              <div className='flex items-center'>
                <input className='bg-white p-2 w-full rounded mb-5 text-black' type={togglePassWordType?"text":"password"} placeholder='Password' />
                { togglePassWordType?
                  <FaEyeSlash onClick={()=>setTogglePasswordType(!togglePassWordType)}  className='text-gray-500 cursor-pointer' style={{marginTop:'-20px',marginLeft:'-30px'}} />
                :
                <FaEye onClick={()=>setTogglePasswordType(!togglePassWordType)} className='text-gray-500 cursor-pointer' style={{marginTop:'-20px',marginLeft:'-30px'}} />
                }
              </div>
              {/* forgot password */}
              <div className='flex justify-between mb-5'>
                  <p className='text-xs text-orange-300'>*Never share your password with others</p>
                  {!insideRegister &&
                    <button className="text-xs underline">Forgot password</button>
                  }
              </div>
              {/* login/register btn */}
              <div className='text-center'>
                       {
                        insideRegister?
                        <button className="bg-green-700 p-2 w-full rounded">Register</button>
                        :
                        <button className="bg-green-700 p-2 w-full rounded">Login</button>

                       }
              </div>
              {/* google authontication */}
              <div className="my-5 text-center">
                <p>------------------or---------------------</p>
                <div className="mt-2 flex justify-center items-center w-full">
                  google Authentication
                </div>
                
              </div>
              {/* new/already existed user */}
              <div className='text-center my-5'>
              {
                insideRegister?
                <p className='text-blue-500'>Existing User? <Link to={'/login'} className='underline ms-5' >Login</Link></p>
                :
                <p className='text-blue-500'>New User? <Link to={'/register'} className='underline ms-5' > Register</Link></p>
              }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth