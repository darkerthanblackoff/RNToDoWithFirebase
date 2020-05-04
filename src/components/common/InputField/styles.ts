import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface InputFieldStyle {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<InputFieldStyle>({
  container: {
    height: 74,
    width: 327,
  },
  label: {
    color: '#000',
    fontSize: 20,
  },
});
