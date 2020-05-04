import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { rem } from '../../../utils';

interface HeaderStyle {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

export const styles = StyleSheet.create<HeaderStyle>({
  container: {},
  title: {
    fontSize: rem(36),
    paddingBottom: rem(10),
  },
  subTitle: {
    fontSize: rem(16),
  },
});
