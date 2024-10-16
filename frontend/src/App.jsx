import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Blogs from "./pages/blogs/Blogs"
import BlogDetail from "./pages/blogs/details/BlogDetail"
import Login from "./pages/login/Login"
import CreateBLog from "./pages/createBlog/CreateBLog"
import Dashboard from "./pages/admin/Dashboard"
function App() {

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<BlogDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-blog" element={<CreateBLog/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
