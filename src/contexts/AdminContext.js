import React, { useEffect, useState } from 'react';

import { auth, db, doc, getDoc } from '../firebase/config';

export const AdminContext = React.createContext();

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      const userRef = doc(db,'users', auth.currentUser.uid);
      getDoc(userRef)
          .then(userRefSnap => {
        if (userRefSnap.exists()) {
          console.log("Document data:", userRefSnap.data());
        } else {
          console.log("No such document!");
        }
      })
          .catch(err => console.error('error on getting user data in AdminProvider', err))

    } else {
    }
  }, []);

  return (
    <AdminContext.Provider value={{ data }}>{children}</AdminContext.Provider>
  );
};
