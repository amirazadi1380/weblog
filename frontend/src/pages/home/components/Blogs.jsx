import axios from 'axios'
import moment from 'jalali-moment'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../customHook/useFetch'

export default function RandomBlogs() {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [loadingBlogs, setLoadingBlogs] = useState(true)
    const navigate = useNavigate()
    const { blogs } = useFetch()

    useEffect(() => {
        async function fetchCategories() {
            await axios.get('http://localhost/blog/controlers/getAllCategories.php')
                .then(res => setCategories(res.data.data))
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        setLoadingBlogs(true)
        const timer = setTimeout(() => {
            setLoadingBlogs(false)
        }, 1000) // تاخیر ۱ ثانیه‌ای

        return () => clearTimeout(timer)
    }, [selectedCategory])

    return (
        <section id='section' className={`px-4 py-6 mx-auto max-w-7xl flex flex-col items-center text-center h-[2000px] ${loadingBlogs ? 'opacity-0 duration-300 ease-linear' : 'opacity-100 duration-300 ease-linear'} `}>
            <h2 className="mb-10 text-3xl font-extrabold leading-tight text-gray-200">محبـوب تـرین بـلاگـ ها</h2>
            <div className='flex mb-10 space-x-3 w-full justify-center'>
                {categories && categories.map((item, index) => (
                    <button
                        onClick={() => {
                            setSelectedCategory(item.id)
                        }}
                        key={index}
                        className={` ${item.id == selectedCategory ? 'bg-red-600/90' : 'bg-white/10'} border w-14 h-8 lg:w-28 lg:text-sm lg:h-12 flex items-center justify-center text-[10px] hover:bg-red-600/90 backdrop-blur-sm text-white duration-200 ease-linear`}>
                        {item.title}
                    </button>
                ))}
                <button
                    onClick={() => setSelectedCategory(0)}
                    className='border w-14 lg:w-28 lg:text-sm lg:h-12 h-8 flex items-center justify-center text-xs bg-red-600/90 text-white '>
                    همه
                </button>
            </div>
            {loadingBlogs ? (
                <div className='flex justify-center items-center w-full h-full z-50'>
                    <p className="text-white bg-red-600">در حال بارگذاری...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {blogs && blogs
                        .filter(item => selectedCategory !== 0 ? item.category_id === selectedCategory : item)
                        .map(item => (
                            <div
                                onClick={() => navigate(`/blogs/${item.id}`)}
                                className='rounded-lg p-5 bg-gray-200 hover:bg-red-500 hover:text-white text-gray-800 duration-200 ease-linear shadow shadow-black/20 flex flex-col justify-between cursor-pointer'
                                key={item.id}>
                                <a>
                                    <img src={item.image} className="object-cover w-full h-56 mb-5 bg-center rounded" alt={item.title} loading="lazy" />
                                </a>
                                <h2 className="mb-2 text-lg font-semibold">
                                    <a href="#">{item.title}</a>
                                </h2>
                                <div className="flex w-full justify-between text-sm font-normal pt-5">
                                    <p>{moment(item.created_at * 1000).locale('fa').format('YYYY/MM/DD')}</p>
                                    <a className="font-medium">
                                        {categories.find(category => category.id === item.category_id)?.title}
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
            )}
            {/* <div className="w-full flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row ">
                <a href="#" className='btn'>بعدی</a>
                <a href="#" className='btn'>قبلی</a>
            </div> */}
        </section>
    )
}
