import React, { useCallback } from 'react';

import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AuthScreenView from './AuthScreenView';
import { ROUTES } from '../../constants';

const AuthScreenContainer = () => {
  const navigation = useNavigation();

  const onSignInPress = useCallback(() => {
    navigation.navigate(ROUTES.AUTH_FLOW.SIGN_IN);
  }, [navigation]);
  const onSignUpPress = useCallback(() => {
    navigation.navigate(ROUTES.AUTH_FLOW.SIGN_UP);
  }, [navigation]);
  const onSignInWithGooglePress = useCallback(() => {
    Alert.alert('Sign in with Google pressed.');
  }, []);

  return (
    <AuthScreenView
      onSignInPress={onSignInPress}
      onSignInWithGooglePress={onSignInWithGooglePress}
      onSignUpPress={onSignUpPress}
    />
  );
};

export default AuthScreenContainer;
