import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { rem } from '../../../utils';

interface ButtonStyle {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<ButtonStyle>({
  container: {
    height: rem(48),
    width: rem(327),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rem(5),
    flexDirection: 'row',
  },
  label: {
    color: '#FFF',
    fontSize: rem(18),
    paddingHorizontal: rem(3),
  },
});
