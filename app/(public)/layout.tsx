import { Fragment } from 'react';
import Header from '@/components/header';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Fragment>
      <Header style='h-1/6' />
      <main className='w-screen px-8 h-3/4 fixed flex justify-start flex-col items-center top-[17%] overflow-auto'>{children}</main>
      <div className='fixed bottom-0 navigation w-screen'>
        <button className='text-xs'>CLOCK<br/>IN</button>
        <button className='text-xs'>CLOCK<br/>OUT</button>
        <button className='text-xs'>LEAVES</button>
        <button className='text-xs'>CALLS</button>
        <button className='text-xs'>SEND<br/>MSG</button>
      </div>
    </Fragment>
  );
}
