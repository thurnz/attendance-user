import { Fragment } from 'react';
import Link from 'next/link';

export default function Leaves() {

  return (
    <Fragment>
      <div className='w-full text-right'>
        <Link href='/leaves/add' className='underline font-bold'>+ Leave Request</Link>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr>
              <td className='pr-2 align-top'>Leave&nbsp;Type:</td>
              <td>Vacation Leave</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Duration:</td>
              <td>10/04/23 - 10/05/23</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Reason:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td>Approved</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr>
              <td className='pr-2 align-top'>Leave&nbsp;Type:</td>
              <td>Vacation Leave</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Duration:</td>
              <td>10/04/23 - 10/05/23</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Reason:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td>Denied</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
