import Link from 'next/link';
import { Fragment } from 'react';

export default function Register() {
  
  return (
    <Fragment>
      <div>
        <label>ID NUMBER</label>
        <br></br>
        <input type="text" id="idNum" />
      </div>
      <div className="mt-2">
        <label>EMAIL</label>
        <br></br>
        <input type="text" id="email" />
      </div>
      <div className="mt-2">
        <label>PASSWORD</label>
        <br></br>
        <input type="password" id="idNum" />
      </div>
      <div className="mt-2">
        <label>CONFIRM PASSWORD</label>
        <br></br>
        <input type="password" id="idNum" />
      </div>
      <Link href="/">
        <button className="my-10">REGISTER</button>
      </Link>
      <Link href="/" className="text-sm underline p-5">Cancel</Link>
    </Fragment>
  );
}
