import React from 'react';
import { View, Text, ViewStyle } from 'react-native';

import { styles } from './styles';

interface HeaderProps {
  title?: string;
  subTitle?: string;
  style?: ViewStyle;
}

const HeaderView = (props: HeaderProps) => {
  const { title = 'Title', subTitle = 'SubTitle', style } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default HeaderView;
