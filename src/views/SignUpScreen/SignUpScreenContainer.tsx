import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import Firebase from '../../config/firebase';
import SignUpScreenView from './SignUpScreenView';
import { logi } from '../../utils';

const SignUpScreenContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const onPressSignUp = useCallback(() => {
    if (password === confirmPass) {
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          logi(`createUserWithEmailAndPassword [success]: ${user}`);
          Alert.alert('Account created', 'Your account successfully created.');
        })
        .catch((err) => {
          console.error(err);
          Alert.alert('Error', err.message);
        });
    }
  }, [email, password, confirmPass]);

  return (
    <SignUpScreenView
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPass={confirmPass}
      setConfirmPass={setConfirmPass}
      onPressSignUp={onPressSignUp}
    />
  );
};

export default SignUpScreenContainer;
