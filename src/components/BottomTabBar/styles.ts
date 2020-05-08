import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { rem, entireScreenWidth } from '../../utils';

interface BottomTabBarStyle {
  container: ViewStyle;
  actionBtn: ViewStyle;
  actionBtnText: TextStyle;
  spacer: ViewStyle;
  leftItemsContainer: ViewStyle;
  rightItemsContainer: ViewStyle;
  itemContainer: ViewStyle;
  itemLabel: TextStyle;
  itemContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<BottomTabBarStyle>({
  container: {
    width: entireScreenWidth,
    height: rem(60),
    backgroundColor: '#292E4E',
    flexDirection: 'row',
  },
  actionBtn: {
    position: 'absolute',
    width: rem(56),
    height: rem(56),
    backgroundColor: '#F96060',
    alignSelf: 'center',
    borderRadius: rem(28),
    bottom: rem(15),
    zIndex: 10,
  },
  actionBtnText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    width: '100%',
    color: '#FFF',
    fontSize: rem(24),
  },
  spacer: {
    width: rem(56),
  },
  leftItemsContainer: { flex: 1, flexDirection: 'row' },
  rightItemsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
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
