import React from 'react';
import { View } from 'react-native';

import { Button, Spacer } from '../../components';
import { styles } from './styles';

interface AuthScreenViewProps {
  onSignInPress: () => void;
  onSignUpPress: () => void;
}

const AuthScreenView = (props: AuthScreenViewProps) => {
  const { onSignInPress, onSignUpPress } = props;

  return (
    <View style={styles.container}>
      <Button label="Sign In" onPress={onSignInPress} />
      <Spacer />
      <Button label="Sign Up" onPress={onSignUpPress} />
      <Spacer />
    </View>
  );
};

export default AuthScreenView;
