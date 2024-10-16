import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Header from './components/Header';
import Blogs from './components/Blogs';
import PreLoad from '../../components/preload/PreLoad';
import BackImage from './components/BackImage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const homeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo(
        homeRef.current,
        { height: 0, opacity: 0 },   // ارتفاع اولیه 0
        {
          height: 2000,
          opacity: 1,   // به ارتفاع کامل
          duration: 3.5,    // مدت زمان انیمیشن
          ease: 'power2.out' // نوع افکت انیمیشن
        }
      );
    }
  }, [isLoading]);

  return (
    <>
      {
        isLoading ? (
          <div className='w-full h-screen flex justify-center items-center relative'>
            <BackImage />
            <PreLoad />
          </div>
        ) : (
          <div ref={homeRef} id='home' className='w-full h-screen flex flex-col  relative'>
            <BackImage />
            <Header />
            <Blogs />
          </div>
        )
      }
    </>
  );
}
