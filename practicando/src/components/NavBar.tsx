import { FC } from 'react';
import Link from 'next/link';
// import { useGetPokemonByNameQuery } from '@/ReduxToolkit/APIs/PokemonApi';

const NavBar: FC = () => {
  // const { data } = useGetPokemonByNameQuery('pikachu');
  // console.log(data);

  return (
    <nav className='bg-blue-800'>
      <h3 className='text-white'>Nav</h3>
    </nav>
  );
};

export default NavBar;
