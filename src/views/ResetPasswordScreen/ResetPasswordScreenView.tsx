import React from 'react';
import { View } from 'react-native';

import { Header, InputField, Spacer, Button } from '../../components';
import { styles } from './styles';

interface ResetPasswordScreenViewProps {
  resetCode: string;
  newPass: string;
  confirmNewPass: string;
  setResetCode: (value: string) => void;
  setNewPass: (value: string) => void;
  setConfirmNewPass: (value: string) => void;
  onChangePassPress: () => void;
}

const ResetPasswordScreenView = (props: ResetPasswordScreenViewProps) => {
  const {
    resetCode,
    newPass,
    confirmNewPass,
    setResetCode,
    setNewPass,
    setConfirmNewPass,
    onChangePassPress,
  } = props;

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        title="Reset Password"
        subTitle="Reset code was sent to your email. Please enter the code and creae new password"
      />
      <InputField
        label="Reset code"
        placeholder="Enter your reset code"
        textContentType="oneTimeCode"
        keyboardType="number-pad"
        value={resetCode}
        onChangeText={setResetCode}
      />
      <Spacer />
      <InputField
        label="New password"
        placeholder="Enter your new password"
        textContentType="newPassword"
        secureTextEntry
        value={newPass}
        onChangeText={setNewPass}
      />
      <Spacer />
      <InputField
        label="Confirm new password"
        placeholder="Confirm your new password"
        textContentType="newPassword"
        secureTextEntry
        value={confirmNewPass}
        onChangeText={setConfirmNewPass}
      />
      <Spacer />
      <Button label="Change Password" onPress={onChangePassPress} />
    </View>
  );
};

export default React.memo(ResetPasswordScreenView);
