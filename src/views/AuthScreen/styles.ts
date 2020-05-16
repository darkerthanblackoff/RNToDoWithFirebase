import { StyleSheet, ViewStyle } from 'react-native';

import { rem } from '../../utils';

interface AuthScreenStyle {
  container: ViewStyle;
  googleButton: ViewStyle;
}

export const styles = StyleSheet.create<AuthScreenStyle>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  googleButton: {
    height: rem(48),
    width: rem(327),
  },
});
