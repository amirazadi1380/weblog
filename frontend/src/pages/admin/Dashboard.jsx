import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BackImage from '../home/components/BackImage';
import Blogs from './components/Blogs';

export default function Dashboard() {
    const [sideBar, setSideBar] = useState(false);
    const [selectedItem, setSelectedItem] = useState(3)
    const [navItems, setNavItems] = useState(
        [
            {
                id: 1,
                title: 'صفحه اصلی',
                path: '/dashboard'
            },
            {
                id: 2,
                title: 'کاربران',
                path: '/dashboard/users'
            },
            {
                id: 3,
                title: 'بلاگ ها',
                path: '/dashboard/tours'
            },
            {
                id: 4,
                title: 'نقش',
                path: '/dashboard/roles'
            },
        ]
    )

    return (

        <div className="min-h-full lg:h-[800px] flex justify-center flex-col items-center">
            <BackImage />
            <nav className="bg-trasnparent  dark:divide-neutral-700 w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    {navItems.map(item => {
                                        const isActive = window.location.pathname === item.path;
                                        return (
                                            <button
                                                onClick={() => setSelectedItem(item.id)}
                                                key={item.id}
                                                className={`rounded-md duration-200 font-medium ease-linear px-3 py-2 text-xs w-28 text-center shadow ${isActive
                                                    ? 'bg-stone-100 text-gray-800 shadow-lg shadow-white/30'
                                                    : 'bg-gray-800/50 text-white shadow-white/40 hover:bg-white hover:text-black hover:shadow-white/30'
                                                    }`}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {item.title}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>

                                {/* <!-- Profile dropdown --> */}
                                <div className="relative ml-3">
                                    <div>
                                        <button type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-8 object-cover h-8 rounded-full" src="/11.jpg" alt="" />
                                        </button>
                                    </div>
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* <!-- Mobile menu button --> */}
                            <button onClick={() => setSideBar(!sideBar)} type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 z-50" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`md:hidden absolute top-0  bg-gray-900 w-full ${sideBar ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="space-y-5 px-2 pb-3 pt-2 sm:px-3">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        {navItems.map(item => <a key={item.id} href={item.path} className=" block rounded-md bg-slate-800  px-3 py-2   font-medium text-gray-400 w-28 text-center  text-lg" aria-current="page">{item.title}</a>)}

                    </div>

                </div>
            </nav>
            {selectedItem == 3 && <Blogs />}

            <Outlet />
        </div>

    );
}
