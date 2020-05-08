import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BottomTabBarItem } from '../BottomTabBarItem';
import { styles } from './styles';

const BottomTabBarView = (props: BottomTabBarProps) => {
  const { state, navigation } = props;
  const { routes, index } = state;

  const leftItems = routes.map((route, i) =>
    i < routes.length / 2 ? (
      <BottomTabBarItem
        key={route.name}
        label={route.name}
        nav={navigation}
        isActive={index === i}
      />
    ) : undefined,
  );
  const rightItems = routes.map((route, i) =>
    i >= routes.length / 2 ? (
      <BottomTabBarItem
        key={route.name}
        label={route.name}
        nav={navigation}
        isActive={index === i}
      />
    ) : undefined,
  );

  return (
    <>
      <View style={styles.actionBtn}>
        <TouchableWithoutFeedback>
          <Text style={styles.actionBtnText}>+</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <View style={styles.leftItemsContainer}>{leftItems}</View>
        <View style={styles.spacer} />
        <View style={styles.rightItemsContainer}>{rightItems}</View>
      </View>
    </>
  );
};

export default BottomTabBarView;
