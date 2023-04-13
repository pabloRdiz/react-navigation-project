import {useContext} from 'react';
import {AuthContext} from '../context/Auth';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthContext');
  }

  return context;
};
