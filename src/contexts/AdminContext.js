import React, { useEffect, useState } from 'react';

import { auth, db } from '../../firebase';

export const AdminContext = React.createContext();

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      const docRef = db.collection('users').doc(auth.currentUser.uid);
      docRef.get().then((results) => {
        const data = results.data();
        setData(data);
      });
    } else {
    }
  }, []);

  return (
    <AdminContext.Provider value={{ data }}>{children}</AdminContext.Provider>
  );
};
