import React, { useCallback } from 'react';

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

  return (
    <AuthScreenView
      onSignInPress={onSignInPress}
      onSignUpPress={onSignUpPress}
    />
  );
};

export default AuthScreenContainer;
