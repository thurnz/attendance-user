'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import { DataContext } from '@/contexts/context';
import { useContext } from 'react';

export default function Add() {
  const { isMobile } = useContext(DataContext);

  const LeaveType = () => {
    return (
      <select className='border-black border w-full'>
        <option value='vacation'>Vacation Leave</option>
        <option value='sick'>Sick Leave</option>
        <option value='maternity'>Maternity Leave</option>
        <option value='Paternity'>Paternity Leave</option>
        <option value='emergency'>Emergency Leave</option>
      </select>
    );
  }

  return (
    <Fragment>
      <div className='w-3/4 mt-2'>
        <label>LEAVE TYPE</label>
        <br></br>
        <LeaveType />
      </div>
      <div className='w-3/4 mt-2'>
        <label>START DATE</label>
        <br></br>
        <input type='date' className='w-full border border-black'></input>
      </div>
      <div className='w-3/4 mt-2'>
        <label>END DATE</label>
        <br></br>
        <input type='date' className='w-full border border-black'></input>
      </div>
      <div className='w-3/4 mt-2'>
        <label>REASON</label>
        <br></br>
        <textarea rows={5} className='border border-black w-full'></textarea>
      </div>
      <Link href='/leaves/confirm'>
        <button className="my-5">SUBMIT</button>
      </Link>
      <Link href='/leaves' className='text-sm underline p-2 mx-10'>Cancel</Link>
    </Fragment>
  );
}
