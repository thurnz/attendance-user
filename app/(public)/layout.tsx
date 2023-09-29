'use client';
import { Fragment, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import Header from '@/components/header';
import Popup from '@/components/popup';
import { DataContext } from '@/contexts/context';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [clockIn, setClockIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const msg = useRef<React.ReactNode>(<div></div>);
  const { isMobile } = useContext(DataContext);
  const date = useRef(new Date());
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const parseDate = () => {
    return `${month[date.current.getMonth()]} ${date.current.getDate()}, ${date.current.getFullYear()}`;
  }

  const parseTime = (hr: number, mins: number) => {
    const h = hr % 12;
    return (h === 0 ? '12' : h) + ':' + mins.toString().padStart(2, '0') + (hr > 11 ? 'PM' : 'AM');
  };

  useEffect(() => {
    msg.current = <Fragment><p className='mb-1'>{`Today is ${day[date.current.getDay()]}`}</p><p>{parseDate()}</p><p className='text-xs m-2'>You clocked {!clockIn ? 'in' : 'out'} at</p><p className='text-lg font-bold mb-2'>{parseTime(date.current.getHours(), date.current.getMinutes())}</p></Fragment>;
  }, [clockIn, date, month, day, parseDate, parseTime]);

  const handleClock = () => {
    console.log(date.current.getMonth());
    setClockIn(!clockIn);
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  }

  return (
    <Fragment>
      {isMobile ?
        <>
          <Header style='h-1/6 fixed' />
          <main className='w-screen px-8 h-3/4 fixed flex justify-start flex-col items-center top-[17%] overflow-auto'>{children}</main>
          <div className='fixed bottom-0 navigation w-screen'>
            <button className='text-xs' onClick={handleClock}>{clockIn ? <Fragment>CLOCK<br />OUT</Fragment> : <Fragment>CLOCK<br />IN</Fragment>}</button>
            <Link href='/tasks'>
              <button className='text-xs'>TASKS</button>
            </Link>
            <Link href='/leaves'>
              <button className='text-xs'>LEAVES</button>
            </Link>
            <Link href='/attendance'>
              <button className='text-xs'>ATTEN<br/>DANCE</button>
            </Link>
            <Link href='/contacts'>
              <button className='text-xs'>CON<br/>TACTS</button>
            </Link>
          </div>
        </>
        :
        <main className='w-screen h-screen flex'>
          <div className='w-1/4 bg-gray-400 h-full left-0 min-w-[250px] flex flex-col justify-start items-center'>
            <Header style='h-1/6 relative min-h-[150px]' />
            <h1 className='text-3xl'>{day[date.current.getDay()]}</h1>
            <p className=''>{parseDate()}</p>
            <button className='m-5' onClick={handleClock}>{clockIn ? <Fragment>CLOCK OUT</Fragment> : <Fragment>CLOCK IN</Fragment>}</button>
            <Link href='/tasks'>
              <button className='m-3'>TASKS</button>
            </Link>
            <Link href='/leaves'>
              <button className='m-3'>LEAVES</button>
            </Link>
            <Link href='/attendance'>
              <button className='m-3'>ATTENDANCE</button>
            </Link>
            <Link href='/contacts'>
              <button className='m-3'>CONTACTS</button>
            </Link>
          </div>
          <div className='w-3/4 px-10 mt-5'>{children}</div>
        </main>
      }
      <Popup isOpen={isOpen} onClose={closeHandler}>
        {msg.current}
      </Popup>
    </Fragment>
  );
}
