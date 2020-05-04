import React from 'react';
import { View, Text } from 'react-native';

import { Header, InputField, Button } from '../../components';
import { styles } from './styles';

interface SignInScreenViewProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (pwd: string) => void;
  resetPass: () => void;
}

const SignInScreenView = (props: SignInScreenViewProps) => {
  const { email, password, setEmail, setPassword, resetPass } = props;

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        title="Welcome"
        subTitle="Sign in to continue"
      />
      <View style={styles.sigInForm}>
        <InputField
          style={styles.emailField}
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Text onPress={resetPass} style={styles.text}>
          Forgot password
        </Text>
      </View>
      <Button label="Log In" />
    </View>
  );
};

export default SignInScreenView;
