import React from 'react';
import { View, ScrollView } from 'react-native';

import { Header, InputField, Button, Spacer } from '../../components';
import { styles } from './styles';

interface SignUpScreenViewProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPass: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPass: (value: string) => void;
  onPressSignUp: () => void;
}

const SignUpScreenView = (props: SignUpScreenViewProps) => {
  const { firstName, lastName, email, password, confirmPass } = props;
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPass,
    onPressSignUp,
  } = props;

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        title="Welcome"
        subTitle="Sign Up to continue"
      />
      <ScrollView>
        <InputField
          label="Firstname"
          placeholder="Enter your firstname"
          value={firstName}
          onChangeText={setFirstName}
          textContentType="name"
        />
        <Spacer />
        <InputField
          label="Lastname"
          placeholder="Enter your lastname"
          value={lastName}
          onChangeText={setLastName}
          textContentType="familyName"
        />
        <Spacer />
        <InputField
          label="E-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Spacer />
        <InputField
          label="Password"
          placeholder="Enter new password"
          textContentType="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Spacer />
        <InputField
          label="Confirm password"
          placeholder="Re-enter your password"
          textContentType="password"
          secureTextEntry
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Spacer />
        <Button label="Sign Up" onPress={onPressSignUp} />
      </ScrollView>
    </View>
  );
};

export default SignUpScreenView;
