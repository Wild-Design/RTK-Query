'use client';
import Link from 'next/link';
import { useGetFullDataUserQuery } from '../../ReduxToolkit/APIs/TaskEaseApi';
const TaskEase = () => {
  const { data, error } = useGetFullDataUserQuery({
    user_name: 'DarkWild',
    password: 'Brenneke1',
  });

  return (
    <>
      <Link className='text-blue-500' href={'/'}>
        Volver a inicio
      </Link>
      <h1>Página taskease</h1>
      {data?.Lists.map((lista) => {
        return (
          <div key={lista.id}>
            <p>{lista.name}</p>
            <ul>
              <li>{lista.Tasks.map((task) => task.description)}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default TaskEase;
