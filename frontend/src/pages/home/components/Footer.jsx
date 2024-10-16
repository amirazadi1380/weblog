import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 mx-auto w-full py-10 border-t border-black/20 bg-gray-200/50 absolute bottom-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 max-auto place-items-center bg-red-600">
        <div className="col-span-3 flex flex-col justify-center items-center lg:items-start">
          <a href="#" title="Hellonext Home Page" className="flex items-center">
            <img src="/logo.png" alt="logo" className='w-36 h-36 bg-gray-200/50' />
            <span className="sr-only">Kutty Home Page</span>
          </a>
          <p className="my-4 text-xs w-64 leading-normal text-gray-600 text-center lg:text-left">
          </p>
        </div>

        <nav className="col-span-2 md:col-span-1 flex flex-col items-end">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">پشتیبانی</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">چت</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> ایمیل </a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">GDPR</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> پشتیبان </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 flex flex-col items-end">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">منابع</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">بلاگ</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#"> توییتر </a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">تیم ها</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">فرصت های همکاری</a>
        </nav>
        <nav className="col-span-1 md:col-span-1 flex flex-col items-end">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">شرکت</p>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">درباره ما</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">قوانین</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">ارتباط</a>
          <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800" href="#">وضعیت</a>
        </nav>
      </div>
      <div className="flex items-center justify-center mt-10 opacity-70 border-t border-gray-100 py-2">
        <p className="text-xs text-gray-800">تمام حقوق این وب‌سایت برای امیرآزادی است</p>
      </div>
    </footer>
  )
}
