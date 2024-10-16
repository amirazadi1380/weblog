import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const token = Cookies.get('token');

    return (
        <header id='header' className="top-0">
            <div className="flex items-center justify-between p-4 mx-auto max-w-7xl h-20">
                <img src="/logo.png" alt="logo" className='w-[70px] h-[70px] cursor-pointer' />
                {token ? <div className='flex space-x-2'>
                    <button onClick={() => navigate('/create-blog')} className="activebtn bg-slate-800 shadow shadow-white/50 text-white hover:bg-green-800 duration-100 ease-linear">ایجاد بلاگ</button>
                    <button onClick={() => navigate('/dashboard')} className="activebtn bg-slate-800 text-white hover:bg-green-800 duration-100 ease-linear shadow shadow-white/50 ">پنل ادمین</button>
                </div> :
                    <button onClick={() => navigate('/login')} className="btn">ورود / ثبت نام</button>}
            </div>
        </header>
    )
}
