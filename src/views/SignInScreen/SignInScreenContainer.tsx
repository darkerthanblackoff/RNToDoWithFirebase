import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import Firebase from '../../config/firebase';
import SignInScreenView from './SignInScreenView';
import { logi } from '../../utils';

const SignInScreenContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const resetPass = useCallback(() => {}, []);
  const onLogInPress = useCallback(() => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        logi(`signInWithEmailAndPassword [success]: ${user}`);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Error', err.message);
      });
  }, [email, password]);

  return (
    <SignInScreenView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      resetPass={resetPass}
      onLogInPress={onLogInPress}
    />
  );
};

export default SignInScreenContainer;
