import React, { useState, useCallback } from 'react';

import ForgotPasswordScreenView from './ForgotPasswordScreenView';

const ForgotPasswordScreenContainer = () => {
  const [email, setEmail] = useState('');
  const onSendRequestPress = useCallback(() => {}, []);

  return (
    <ForgotPasswordScreenView
      email={email}
      setEmail={setEmail}
      onSendRequestPress={onSendRequestPress}
    />
  );
};

export default ForgotPasswordScreenContainer;
