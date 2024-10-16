import React, { useEffect, useState } from 'react'
import BlogModal from './BlogModal'
import axios from 'axios'
export default function Blogs() {
  const [isOpen,setIsOpen] = useState(false)
  const [blogs,setBlogs] = useState([])
  const [categories,setCategories] = useState([])
  useEffect(() => {
    async function fetchBlogs() {
        await axios.get('http://localhost/blog/controlers/getAllBlogs.php').then(res => setBlogs(res.data.data))
        await axios.get('http://localhost/blog/controlers/getAllCategories.php').then(res => setCategories(res.data.data))
    }
    fetchBlogs()
}, [])
  const [selectedBlogsID, setSelectedBlogsID] = useState(1)
  const selectedBlog = blogs.find(item=>item.id == selectedBlogsID)
  return (
    <div className='w-full h-screen flex justify-center relative'>
    {isOpen &&  <BlogModal selectedBlog={selectedBlog} isOpen={isOpen} setIsOpen={setIsOpen}/>}
      <div className='flex justify-center items-center w-11/12 mt-5 rounded-3xl h-screen bg-white/10 backdrop-blur-xl'>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 pb-1">
                        بلاگ
                      </h2>
                      <p className="text-xs text-gray-600 dark:text-neutral-400">
                        افزودن, حذف , تغییر, تایید بلاگ
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                          مشاهده همه
                        </a>

                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                          افزودن بلاگ
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-80 overflow-y-auto h-32 w-96 md:w-auto">
                    <table className="min-w-1/2 divide-y divide-gray-200 dark:divide-neutral-700">
                      <thead className="bg-gray-800">
                        <tr>
                          <th scope="col" className="ps-6 py-3 text-start">
                          </th>

                          <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                            <div className="flex items-end justify-center  gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                نویسنده
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-end justify-end  gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                دسته بندی
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-end justify-end  gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                وضعیت
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-end justify-end  gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                تاریخ ثبت
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-end"></th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 overflow-y-auto h-64">
                        {blogs.map(item =>
                          <tr key={item.id}>
                            <td className="size-px whitespace-nowrap">
                              <div className="ps-6 py-3">

                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                <div className="flex items-center gap-x-3 w-20">
                                  <img className=" w-8 h-8 object-cover rounded-full" src={item.image} alt="Avatar" />
                                  <div className="grow  text-right">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">امیر</span>
                                    <span className="block text-sm text-gray-500 dark:text-neutral-500">آزادی</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="h-px w-72 whitespace-nowrap">
                              <div className="px-6 py-3 flex justify-end flex-col items-end">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200 pb-1">{
                                   categories?.find(category=>category.id == item.category_id)?.title
                                }</span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                  <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  {item.status == 1 ? 'تایید شده' :'در انتظار تایید'}
                                </span>
                              </div>
                            </td>

                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="text-sm text-gray-500 dark:text-neutral-500">{item.created_at}</span>
                              </div>
                            </td>
                            <td className="size-px whitespace-nowrap">
                              <div className="px-6 py-1.5">
                                <button className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" onClick={()=>{
                                  setSelectedBlogsID(item.id)
                                  setIsOpen(true)
                                  }}>
                                  مشاهده جزییات
                                </button>
                              </div>
                            </td>

                          </tr>)}



                      </tbody>
                    </table>
                  </div>
       
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">{blogs.length}</span> تعداد
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                          بعدی
                        </button>

                        <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          قبلی
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
