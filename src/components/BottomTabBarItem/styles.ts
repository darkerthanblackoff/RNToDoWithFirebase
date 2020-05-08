import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { rem } from '../../utils';

interface BottomTabBarStyle {
  itemContainer: ViewStyle;
  itemLabel: TextStyle;
  itemContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<BottomTabBarStyle>({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: { color: '#FFF', fontSize: 12, marginTop: rem(5) },
  itemContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
