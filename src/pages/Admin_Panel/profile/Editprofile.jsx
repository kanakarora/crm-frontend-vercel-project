import { div } from 'framer-motion/client'
import React from 'react'
import { Form } from 'react-router-dom'

const Editprofile = () => {
  return (
    <>
      <div className='w-full flex gap-[5px] p-[10px] profileedit-main'>
        <div className='w-[60%] h-[100vh] overflow-scroll form-profile'>
          <form className=' w-[100%]  shadow-md  xl:p-[20px] p-[10px] border rounded-md  border-1'>
            <div className='flex xl:flex-col flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
              <h2 className='text-[20px] newprofile1 font-medium'>Edit Profile</h2>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Profile Image</label><br />
                <input type='file' placeholder='Enter Address' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>First Name</label><br />
                <input type='text' placeholder='FlowChanger' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Last Name</label><br />
                <input type='text' placeholder='Agency' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Email</label><br />
                <input type='text' placeholder='Enter Email Address' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Phone</label><br />
                <input type='number' placeholder='Phone No' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%]  xl:[48%]'>
                <label className='text-[14px]'>Default Language</label><br />
                <select className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                  <option>System default</option>
                </select>
              </div>
              <div className='w-[100%]  xl:[48%] '>
                <label className='text-[14px]'>Direction</label><br />
                <select className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                  <option>System default</option>
                </select>
              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Facebook</label><br />
                <input type='text' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Linkedin</label><br />
                <input type='text' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Skype</label><br />
                <input type='text' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

              </div>
              <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Email Signature</label><br />
                <textarea className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'></textarea>


              </div>







            </div>
          </form>


        </div>


        <div className='w-[40%] flex form-profile flex-col gap-[20px]'>
          <div>
            <form className=' w-[100%]  shadow-md  xl:p-[20px] p-[10px] border rounded-md  border-1'>
              <div className='flex xl:flex-col flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <h2 className='text-[18px] font-medium newprofile1'>Change Your Password</h2>
                <div className='w-[100%] xl:[48%] '>
                  <label className='text-[14px]'>Old Password</label><br />
                  <input type='number' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                </div>
                <div className='w-[100%] xl:[48%] '>
                  <label className='text-[14px]'>New Password</label><br />
                  <input type='number' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                </div>
                <div className='w-[100%] xl:[48%] '>
                  <label className='text-[14px]'>Repeat New Password</label><br />
                  <input type='number' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                </div>
                <div className='profile-pass mt-[10px] p-[5px] rounded-md bg-[#f4f5f9] shadow-cs '>
                  <p className='text-[14px]'>Password Last Changed 2 Weeks ago: </p>

                </div>

              </div>
            </form>




          </div>
          <div>
            <form className=' w-[100%]  shadow-md  xl:p-[20px] p-[10px] border rounded-md  border-1'>
              <div className='flex xl:flex-col flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <h2 className='text-[18px] font-medium newprofile1'>Two Factor Authentication</h2>
                <div className='w-[100%] xl:[48%] flex gap-[6px]'>
                  <input type="checkbox" />
                  <p className='text-[14px]'>Disabled</p>

                </div>
                <div className='w-[100%] xl:[48%] flex gap-[6px]'>
                  <input type="checkbox" />
                  <p className='text-[14px]' >Enable Email Two  Factor Authentication</p>

                </div>
                <div className='w-[100%] xl:[48%] flex gap-[6px]'>
                  <input type="checkbox" />
                  <p className='text-[14px]'>Enable Goggle Authenticator</p>

                </div>

              </div>
            </form>




          </div>

        </div>


      </div>
    </>


  )
}

export default Editprofile