'use client';
import { Fragment } from 'react';
import Header from '@/components/header';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Fragment>
      <Header style='h-1/4 fixed' />
      <main className='w-screen h-auto px-8 flex justify-center flex-col items-center relative top-[25%]'>{children}</main>
    </Fragment>
  );
}
