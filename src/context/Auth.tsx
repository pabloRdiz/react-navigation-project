import React, {Dispatch, SetStateAction} from 'react';
import {createContext, useState} from 'react';

export const AuthContext = createContext<
  | {
      authenticated: boolean;
      login: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{authenticated: isAuth, login: setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
