import React from 'react';
import { View } from 'react-native';
import { GoogleSocialButton } from 'react-native-social-buttons';

import { Button, Spacer } from '../../components';
import { styles } from './styles';

interface AuthScreenViewProps {
  onSignInPress: () => void;
  onSignInWithGooglePress: () => void;
  onSignUpPress: () => void;
}

const AuthScreenView = (props: AuthScreenViewProps) => {
  const { onSignInPress, onSignInWithGooglePress, onSignUpPress } = props;

  return (
    <View style={styles.container}>
      <Button label="Sign In" onPress={onSignInPress} />
      <Spacer />
      <GoogleSocialButton
        buttonViewStyle={styles.googleButton}
        onPress={onSignInWithGooglePress}
      />
      <Spacer />
      <Button label="Sign Up" onPress={onSignUpPress} />
      <Spacer />
    </View>
  );
};

export default AuthScreenView;
