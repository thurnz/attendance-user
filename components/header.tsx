import Image from 'next/image';

export default function Header({
  style
}: {
  style: string 
}) {
  return (
    <header className={`fixed w-screen z-10 ${style}`}>
      <Image
        priority
        className='p-4'
        src='/images/Ph_seal_cebucity.png'
        fill={true}
        objectFit='contain'
        alt=''
      />
    </header>
  );
}