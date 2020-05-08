import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { ROUTES } from '../../constants';
import { Quick, Menu, Check, Profile } from '../../assets/svg';
import { styles } from './styles';

const icons: {
  [key: string]: React.MemoExoticComponent<(props: SvgProps) => JSX.Element>;
} = {
  [ROUTES.MAIN_FLOW.TASKS]: Check,
  [ROUTES.MAIN_FLOW.MENU]: Menu,
  [ROUTES.MAIN_FLOW.QUICK]: Quick,
  [ROUTES.MAIN_FLOW.PROFILE]: Profile,
};

interface BottomTabBarItemProps {
  label: string;
  nav: any;
  isActive: boolean;
}

const BottomTabBarItemView = (props: BottomTabBarItemProps) => {
  const Icon = icons[props.label];
  const color = props.isActive ? '#FFF' : '#8E8E93';

  return (
    <View style={styles.itemContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.nav.navigate(props.label);
        }}
      >
        <View style={styles.itemContentContainer}>
          <Icon height={24} width={24} fill={color} />
          <Text style={[styles.itemLabel, { color }]}>{props.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default React.memo(BottomTabBarItemView);
