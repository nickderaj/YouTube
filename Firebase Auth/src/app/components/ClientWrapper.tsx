'use client';

import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const ClientWrapper: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user;
        console.log(uid);
      } else {
        console.log('No user');
      }
    });
  }, []);

  return <div>{children}</div>;
};

export default ClientWrapper;
