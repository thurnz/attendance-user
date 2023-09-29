import { Fragment } from 'react';
import Link from 'next/link';

export default function Confirm() {
  
  return (
    <Fragment>
      <h1>Your request has been submitted!</h1>
      <p>Curabitur placerat non sem eget aliquam. In hac habitasse platea dictumst. Etiam nec tincidunt mi, eu vulputate erat. Morbi non felis non diam tincidunt porttitor. </p>
      <Link href="/leaves">
        <button className="my-5">OK</button>
      </Link>
    </Fragment>
  );
}
