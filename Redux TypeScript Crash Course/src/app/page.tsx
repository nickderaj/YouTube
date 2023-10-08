'use client';

import { clearUser, setUser } from '@/db/slices/userSlice';
import { RootState } from '@/db/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const { name, email, id } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const updateUser = () => {
    const name = 'Nick';
    const email = 'nick@gmail.com';
    const id = '1';

    dispatch(setUser({ name, email, id }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>You are:</h1>
      <h2 className="text-6xl font-bold">
        {name} {email} {id}
      </h2>
      <div className="flex flex-row gap-2 justify-center items-center w-full">
        <button onClick={updateUser}>Set User</button>
        <button onClick={() => dispatch(clearUser())}>Clear User</button>
      </div>
    </main>
  );
}
