import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

interface ButtonProps {
  label?: string;
  color?: string;
  onPress?: () => void;
}

const ButtonView = (props: ButtonProps) => {
  const { label = 'Label', color = '#F96060', onPress = () => {} } = props;

  switch (Platform.OS) {
    case 'android':
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#000', false)}
        >
          <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    default:
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </TouchableOpacity>
      );
  }
};

export default ButtonView;
