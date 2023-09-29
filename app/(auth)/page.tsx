'use client';
import { useContext, Fragment } from 'react';
import { DataContext } from '@/contexts/context';
import Link from 'next/link';

export default function Home() {
  const { isMobile } = useContext(DataContext);

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
      <Link href="/tasks" ><button className="mt-10">LOGIN</button></Link>
      {isMobile &&
        <div className="text-sm cursor-pointer underline p-10 my-10" onClick={handleBiometric}>Login using biometric</div>
      }
      <Link href="/register" className="text-sm underline p-5">Don&apos;t have an account? <span className="font-bold">Register</span></Link>
    </Fragment>
  );
}
