import { Fragment } from 'react';
import Header from '@/components/header';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Header style='h-1/4' />
      <main className='w-screen px-8 flex justify-center flex-col items-center relative top-[25%]'>{children}</main>
    </Fragment>
  );
}
