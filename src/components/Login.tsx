import React from 'react';
import {Button} from 'react-native';
import {useAuth} from '../hooks/useAuth';

const Login = () => {
  const {login} = useAuth();
  return <Button onPress={() => login(true)} title="Login" />;
};

export default Login;
