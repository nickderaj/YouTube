'use client';

import { auth } from '@/firebase/config';
import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';

export default function Home() {
  const onLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const res = await signInWithRedirect(auth, provider);
      console.log('res from function: ', res);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const onLogout = () => {
    signOut(auth);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center items-center gap-4">
        <button className="p-2 px-4 rounded-md bg-rose-400" onClick={onLogout}>
          Log Out
        </button>
        <button className="p-2 px-4 rounded-md bg-indigo-400" onClick={onLogin}>
          Log In
        </button>
      </div>
    </main>
  );
}
