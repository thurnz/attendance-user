import { Fragment } from 'react';

export default function Tasks() {

  return (
    <Fragment>
      <div>
        <h1 className='text-center'>Tasks</h1>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr>
              <td className='pr-2 align-top'>Task:</td>
              <td>Lorem ipsum dolor sit amet</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Description:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td>
                <select className='border-black border'>
                  <option value='not started'>Not Started</option>
                  <option value='ongoing'>Ongoing</option>
                  <option value='pending'>Pending</option>
                  <option value='cancelled'>Cancelled</option>
                  <option value='done'>Done</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr>
              <td className='pr-2 align-top'>Task:</td>
              <td>Lorem ipsum dolor sit amet</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Description:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td>
                <select className='border-black border'>
                  <option value='not started'>Not Started</option>
                  <option value='ongoing'>Ongoing</option>
                  <option value='pending' selected>Pending</option>
                  <option value='cancelled'>Cancelled</option>
                  <option value='done'>Done</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr>
              <td className='pr-2 align-top'>Task:</td>
              <td>Lorem ipsum dolor sit amet</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Description:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td>
                <select className='border-black border'>
                  <option value='not started'>Not Started</option>
                  <option value='ongoing'>Ongoing</option>
                  <option value='pending'>Pending</option>
                  <option value='cancelled'>Cancelled</option>
                  <option value='done' selected>Done</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-2 p-3 border-solid border border-black rounded-xl'>
        <table className='text-sm'>
          <tbody>
            <tr>
              <td className='pr-2 align-top'>Task:</td>
              <td>Lorem ipsum dolor sit amet</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Description:</td>
              <td>Consectetuer adipiscing elit, sed diam nonummy nibh euismod laoreet dolore.</td>
            </tr>
            <tr>
              <td className='pr-2 align-top'>Status:</td>
              <td>
                <select className='border-black border'>
                  <option value='not started'>Not Started</option>
                  <option value='ongoing'>Ongoing</option>
                  <option value='pending'>Pending</option>
                  <option value='cancelled'>Cancelled</option>
                  <option value='done'>Done</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
