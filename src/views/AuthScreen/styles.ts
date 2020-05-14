import { StyleSheet, ViewStyle } from 'react-native';

interface AuthScreenStyle {
  container: ViewStyle;
}

export const styles = StyleSheet.create<AuthScreenStyle>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
