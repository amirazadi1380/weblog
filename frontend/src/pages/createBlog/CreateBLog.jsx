import React from 'react'
import CreateForm from './components/CreateForm'

export default function CreateBLog() {

    return (
        <div className='w-full h-[2500px] lg:h-[1500px]  bg-slate-950 relative'>
            <img src="11.jpg" alt="back" className='absolute z-0  h-[2500px] lg:h-[1500px] brightness-50 object-cover w-screen' />
            <CreateForm />
        </div>)
}
