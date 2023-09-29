import { Fragment } from 'react';

export default function Attendance() {
  return (
    <Fragment>
      <h1 className='text-center'>October</h1>
      <table className='text-sm w-full text-center'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock Out</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-gray-200'>
            <td className='text-lg' rowSpan={2}>10/2/23</td>
            <td>8:00AM</td>
            <td>12:00PM</td>
          </tr>
          <tr className='bg-gray-200'>
            <td>1:00PM</td>
            <td>5:00PM</td>
          </tr>
          <tr className='bg-gray-300'>
            <td className='text-lg' rowSpan={2}>10/3/23</td>
            <td>8:00AM</td>
            <td>12:00PM</td>
          </tr>
          <tr className='bg-gray-300'>
            <td>1:00PM</td>
            <td>5:00PM</td>
          </tr>
          <tr className='bg-gray-200'>
            <td className='text-lg' rowSpan={2}>10/4/23</td>
            <td>8:00AM</td>
            <td>12:00PM</td>
          </tr>
          <tr className='bg-gray-200'>
            <td>1:00PM</td>
            <td>5:00PM</td>
          </tr>
          <tr className='bg-gray-300'>
            <td className='text-lg' rowSpan={2}>10/5/23</td>
            <td>8:00AM</td>
            <td>12:00PM</td>
          </tr>
          <tr className='bg-gray-300'>
            <td>1:00PM</td>
            <td>5:00PM</td>
          </tr>
          <tr className='bg-gray-200'>
            <td className='text-lg' rowSpan={2}>10/6/23</td>
            <td>8:00AM</td>
            <td>12:00PM</td>
          </tr>
          <tr className='bg-gray-200'>
            <td>1:00PM</td>
            <td>5:00PM</td>
          </tr>
          <tr className='bg-gray-300'>
            <td className='text-lg' rowSpan={2}>10/7/23</td>
            <td>8:00AM</td>
            <td>12:00PM</td>
          </tr>
          <tr className='bg-gray-300'>
            <td>1:00PM</td>
            <td>5:00PM</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
