import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonStyle {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<ButtonStyle>({
  container: {
    height: 48,
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  label: {
    color: '#FFF',
    fontSize: 18,
    paddingHorizontal: 3,
  },
});
