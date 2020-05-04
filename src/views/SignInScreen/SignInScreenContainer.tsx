import React, { useState, useCallback } from 'react';

import SignInScreenView from './SignInScreenView';

const SignInScreenContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const resetPass = useCallback(() => {}, []);

  return (
    <SignInScreenView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      resetPass={resetPass}
    />
  );
};

export default SignInScreenContainer;
