import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetch() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        async function fetchBlogs() {
            await axios.get('http://localhost/blog/controlers/getAllVerifiedBlogs.php').then(res => setBlogs(res.data.data))
        }
        fetchBlogs()
    }, [])

  return {blogs,setBlogs}
}
