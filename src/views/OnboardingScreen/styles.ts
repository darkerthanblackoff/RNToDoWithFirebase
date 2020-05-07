import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { entireScreenWidth } from '../../utils';

export const screenWidth = entireScreenWidth;

interface OnboardingScreenStyle {
  container: ViewStyle;
  content: ViewStyle;
  footer: ViewStyle;
  footerContent: ViewStyle;
  nextBtnLabel: TextStyle;
}

export const styles = StyleSheet.create<OnboardingScreenStyle>({
  container: { flex: 1 },
  content: {
    flex: 1,
  },
  footer: {
    height: '100%',
  },
  footerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: '100%',
    position: 'absolute',
  },
  nextBtnLabel: { color: '#000' },
});
