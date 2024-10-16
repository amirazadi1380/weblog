import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Loader from '../../../components/Loader'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function CreateForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [categoryID, setCategoryID] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState('')
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchAllCategories() {
            await axios.get('http://localhost/blog/controlers/getAllCategories.php').then(res => setCategories(res.data.data)).catch(err => console.error(err))
        }
        fetchAllCategories()
    }, [])

    const handleSubmit = async (e) => {
        const token = Cookies.get('token')
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData()
        formData.append('title', title)
        formData.append('content', content)
        formData.append('image', image)
        formData.append('category_id', categoryID)
        formData.append('token', token)
        axios.post('http://localhost/blog/controlers/createBlog.php', formData).then(() => navigate('/')).catch(err => console.error(err))

        setIsLoading(false)
    }
    return (
        <div className="px-4 py-20 mx-auto max-w-7xl">
            <Toaster position="top-left"
                reverseOrder={false} />
            <a href="/" title="Kutty Home Page" className="flex items-center justify-center sm:justify-center">
                <Loader />
            </a>
            <div
                className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4  border-0 z-50 border-gray-200 rounded-lg bg-black/10 md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-10/12 md:px-6 sm:mt-8 sm:mb-5  shadow-lg shadow-black/30 backdrop-blur-md"
            >
                <h1 className="mb-5 text-3xl font-extrabold text-center text-white sm:text-center">ایجاد بلاگ</h1>
                <form onSubmit={handleSubmit} className="pb-1 space-y-4  text-right px-5 flex-col flex justify-center items-center text-white" encType='multipart/form-data'>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-white">نام بلاگ</span>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="اسم بلاگ" required className='bg-white/20 outline-none backdrop-blur-md' />
                    </label>
                    <label className="block  w-full">
                        <span className="block mb-1 text-xs font-medium text-white">متن</span>
                        <textarea onChange={(e) => setContent(e.target.value)} required className='border  text-right w-full h-96 bg-white/20 p-5 outline-none backdrop-blur-md' />
                    </label>
                    <label className="block  w-full">
                        <span className="block mb-1 text-xs font-medium text-white">عکس</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className='absolute left-0 opacity-0 h-20 z-50' />
                        <button className='border-dotted border-2 border-black/20 h-20 w-full bg-white/20 outline-none backdrop-blur-md'>آپلود عکس</button>
                    </label>

                    <select onChange={(e) => setCategoryID(e.target.value)} className="block w-48 text-center h-10 border bg-gray-800/50 outline-none backdrop-blur-md">
                        <option >دسته بندی</option>
                        {categories.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
                    </select>
                    <div className="flex  items-start justify-center sm:items-center sm:flex-row space-x-20">
                        <button type="submit" className="w-24 mt-5 h-10 hover:w-36 duration-150 ease-linear rounded-lg text-gray-100 bg-blue-600"  >ثبت بلاگ</button>
                    </div>
                </form>
            </div>

        </div>)
}
