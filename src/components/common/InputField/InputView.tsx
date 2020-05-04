import React from 'react';
import { View, Text, TextInput, ViewStyle, TextInputProps } from 'react-native';

import { styles } from './styles';

interface InputFieldProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  style?: ViewStyle;
}

const InputFieldView = (props: InputFieldProps) => {
  const { label = 'Label', style, placeholder = 'placeholder' } = props;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        underlineColorAndroid="#EDEDED"
        {...props}
      />
    </View>
  );
};

export default InputFieldView;
