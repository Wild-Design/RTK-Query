import { FC } from 'react';
import Link from 'next/link';

const NavBar: FC = () => {
  return (
    <nav className='bg-blue-800'>
      <h3 className='text-white'>Soy el Nav</h3>
      <ul className='text-blue-400'>
        <li>
          <Link href={'/'}>inicio</Link>
        </li>
        <li>
          <Link href={'/cosa'}>cosa</Link>
        </li>
        <li>
          <Link href={'/autos'}>autos</Link>
        </li>
        <li>
          <Link href={'/autos/chevrolet'}>autos/chevrolet</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
