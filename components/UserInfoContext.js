// // components/UserInfoContext.js
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const UserInfoContext = createContext();

// export const UserInfoProvider = ({ children }) => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const storedUserInfo = window.localStorage.getItem('loginInfo');
//     const parsedUserInfo = JSON.parse(storedUserInfo);
//     setUserInfo(parsedUserInfo);
//   }, []);

//   return (
//     <UserInfoContext.Provider value={userInfo}>
//       {children}
//     </UserInfoContext.Provider>
//   );
// };

// export const useUserInfo = () => useContext(UserInfoContext);
// components/UserInfoContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserInfo = window.localStorage.getItem('loginInfo');
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
    }
  }, []);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
