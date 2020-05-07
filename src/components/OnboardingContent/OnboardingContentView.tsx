import React from 'react';
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

import { styles } from './styles';

interface OnboardingContentProps {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  style: ViewStyle;
}

const OnboardingContentView = (props: OnboardingContentProps) => {
  const { image, title, subTitle, style } = props;

  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default React.memo(OnboardingContentView);
