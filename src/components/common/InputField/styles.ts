import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { rem } from '../../../utils';

interface InputFieldStyle {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<InputFieldStyle>({
  container: {
    height: rem(74),
    width: rem(327),
  },
  label: {
    color: '#000',
    fontSize: rem(20),
  },
});
