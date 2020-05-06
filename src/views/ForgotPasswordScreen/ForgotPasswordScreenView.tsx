import React from 'react';
import { View } from 'react-native';

import { InputField, Button, Spacer, Header } from '../../components';
import { styles } from './styles';

interface ForgotPasswordScreenViewProps {
  email: string;
  setEmail: (value: string) => void;
  onSendRequestPress: () => void;
}

const ForgotPasswordScreenView = (props: ForgotPasswordScreenViewProps) => {
  const { email, setEmail, onSendRequestPress } = props;

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        title="Forgot Password"
        subTitle="Please enter your email below to recevie your password reset instructions"
      />
      <InputField
        label="E-mail"
        placeholder="Enter your email address"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Button label="Send Request" onPress={onSendRequestPress} />
    </View>
  );
};

export default React.memo(ForgotPasswordScreenView);
