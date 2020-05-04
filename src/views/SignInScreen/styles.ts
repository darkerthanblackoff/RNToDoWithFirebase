import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { rem } from '../../utils';

export interface SignInScreenStyles {
  container: ViewStyle;
  sigInForm: ViewStyle;
  header: ViewStyle;
  emailField: ViewStyle;
  passField: ViewStyle;
  loginButton: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<SignInScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: rem(24),
  },
  sigInForm: { marginBottom: 90 },
  header: { marginVertical: 90 },
  emailField: { marginBottom: 20 },
  passField: {},
  loginButton: {},
  text: { color: '#000' },
});
