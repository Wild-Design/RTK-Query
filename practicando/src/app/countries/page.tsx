'use client';
import Link from 'next/link';
import { useGetAllCountriesQuery } from '../../ReduxToolkit/APIs/CountriesApi';

const Countries = () => {
  const { data } = useGetAllCountriesQuery(undefined);
  console.log({ data });

  return (
    <>
      <Link className='text-blue-500' href={'/'}>
        volver a inicio
      </Link>
      <h1 className='text-xl text-pink-400'>Página countries</h1>
      {data?.map((pais) => (
        <ul>
          <li>{pais.name}</li>
        </ul>
      ))}
    </>
  );
};

export default Countries;
