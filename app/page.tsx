'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import _ from 'underscore';

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = _.debounce(() => {
      setMobile(window.innerWidth < window.innerHeight);
    }, 500);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogin = () => {
    console.log('click');
  };

  const handleBiometric = () => {
    console.log('bio');
  }
  
  return (
    <div className="flex justify-center flex-col items-center">
      {!mobile && 
        <div>
          <label>ID NUMBER</label>
          <br></br>
          <input type="text" id="idNum" />
        </div>
      }
      <div className="mt-2">
        <label>PASSWORD</label>
        <br></br>
        <input type="password" id="password" />
      </div>
      <button className="mt-10" onClick={handleLogin}>LOGIN</button>
      {mobile && 
        <div className="text-sm cursor-pointer underline p-10 my-10" onClick={handleBiometric}>Login using biometric</div>
      }
      <Link href="/register" className="text-sm absolute bottom-10 underline">Don&apos;t have an account? <span className="font-bold">Register</span></Link>
    </div>
  );
}
