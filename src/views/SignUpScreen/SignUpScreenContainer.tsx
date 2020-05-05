import React, { useState, useCallback } from 'react';

import SignUpScreenView from './SignUpScreenView';

const SignUpScreenContainer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const onPressSignUp = useCallback(() => {}, []);

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
