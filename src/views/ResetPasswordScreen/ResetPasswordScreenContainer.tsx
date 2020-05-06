import React, { useState, useCallback } from 'react';

import ResetPasswordScreenView from './ResetPasswordScreenView';

const ResetPasswordScreenContainer = () => {
  const [resetCode, setResetCode] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const onChangePassPress = useCallback(() => {}, []);

  return (
    <ResetPasswordScreenView
      resetCode={resetCode}
      setResetCode={setResetCode}
      newPass={newPass}
      setNewPass={setNewPass}
      confirmNewPass={confirmNewPass}
      setConfirmNewPass={setConfirmNewPass}
      onChangePassPress={onChangePassPress}
    />
  );
};

export default ResetPasswordScreenContainer;
