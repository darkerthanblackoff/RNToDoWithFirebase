import React from 'react';
import { View, ViewStyle } from 'react-native';

interface SpacerProps {
  value?: number;
  type?: 'v' | 'h';
  style?: ViewStyle;
}

const Spacer = (props: SpacerProps) => {
  const { value = 32, type = 'v', style } = props;

  return (
    <View
      style={[type === 'v' ? { height: value } : { width: value }, style]}
    />
  );
};

export default Spacer;
