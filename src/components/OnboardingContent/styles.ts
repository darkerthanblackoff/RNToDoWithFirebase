import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

import { rem } from '../../utils';

interface OnboardingContentStyle {
  container: ViewStyle;
  image: ImageStyle;
  textContainer: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

export const styles = StyleSheet.create<OnboardingContentStyle>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: rem(252),
    width: rem(305),
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: rem(49),
  },
  title: {
    fontSize: rem(24),
    marginBottom: rem(10),
  },
  subTitle: {
    fontSize: rem(18),
  },
});
