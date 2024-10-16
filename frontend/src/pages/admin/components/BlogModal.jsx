import axios from 'axios'
import React, { useState } from 'react'
import {MdClose} from 'react-icons/md'
export default function BlogModal({ selectedBlog,isOpen,setIsOpen }) {
    const [status, setStatus] = useState(1)
    const formData = new FormData()
    formData.append('status', status)
    formData.append('id', selectedBlog?.id)
    return (
        <div className=' inset-0 fixed bg-black/70 flex justify-center items-center z-50 w-full'>
            
            <div className='bg-gray-200 px-5 rounded-xl w-1/2 flex  items-center  h-6/7  z-50 flex-col py-6 relative'>
                <MdClose onClick={()=>setIsOpen(false)} className='text-3xl absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-black duration-150 ease-linear'/>
                <div className='w-52 object-center object-cover rounded-xl h-36'>
                    <img src={selectedBlog?.image} alt="blog img" className='w-full h-full rounded-lg' />
                </div>
                <h1 className='text-2xl font-extrabold text-gray-600 py-5'>{selectedBlog?.title}</h1>
                <p className='text-[14px] h-64 overflow-scroll leading-5 tracking-widest text-right'>{selectedBlog?.content}</p>
                <div className="w-full flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row ">
                    <button onClick={() => {
                        setStatus(-1)
                        axios.post('http://localhost/blog/controlers/verifyBlog.php', formData).then(res => console.log(res.data))
                    }} className='bg-red-700 text-gray-200 w-20 h-7 rounded'>رد</button>
                    <button onClick={() => {
                        setStatus(1)
                        axios.post('http://localhost/blog/controlers/verifyBlog.php', formData).then(res => console.log(res.data))
                    }} className='bg-green-600 text-gray-200 w-20 h-7 rounded'>تایید</button>
                </div>
            </div>
        </div>
    )
}
