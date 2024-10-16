import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Blogs() {
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
   async function fetchBlogs (){
    await axios.get('http://localhost/blog/controlers/getAllVerifiedBlogs.php').then(res=>setBlogs(res.data.data))
   }
   fetchBlogs() 
  },[])
  return (
    <div>
      { blogs.map(item=><img src={item.image} alt='asd' key={item.id}/>)}
    </div>
  )
}
