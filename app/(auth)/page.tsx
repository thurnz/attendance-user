'use client';
import { useContext, useEffect, Fragment } from 'react';
import { DataContext } from '@/contexts/context';
import Link from 'next/link';
import _ from 'underscore';

export default function Home() {
  const { isMobile, setIsMobile } = useContext(DataContext);

  useEffect(() => {
    const handleResize = _.debounce(() => {
      setIsMobile(window.innerWidth < window.innerHeight);
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
    <Fragment>
      {!isMobile &&
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
      <Link href="/tasks" ><button className="mt-10" onClick={handleLogin}>LOGIN</button></Link>
      {isMobile &&
        <div className="text-sm cursor-pointer underline p-10 my-10" onClick={handleBiometric}>Login using biometric</div>
      }
      <Link href="/register" className="text-sm underline p-5">Don&apos;t have an account? <span className="font-bold">Register</span></Link>
    </Fragment>
  );
}
