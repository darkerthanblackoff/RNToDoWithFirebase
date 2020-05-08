import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as VIEWS from '../views';
import { ROUTES } from '../constants';
import { BottomTabBar } from '../components';

const TabNav = createBottomTabNavigator();

const Router = () => (
  <NavigationContainer>
    <TabNav.Navigator tabBar={BottomTabBar}>
      <TabNav.Screen
        name={ROUTES.MAIN_FLOW.TASKS}
        component={VIEWS.MainFlowScreens.TasksScreen}
      />
      <TabNav.Screen
        name={ROUTES.MAIN_FLOW.MENU}
        component={VIEWS.MainFlowScreens.MenuScreen}
      />
      <TabNav.Screen
        name={ROUTES.MAIN_FLOW.QUICK}
        component={VIEWS.MainFlowScreens.QuickScreen}
      />
      <TabNav.Screen
        name={ROUTES.MAIN_FLOW.PROFILE}
        component={VIEWS.MainFlowScreens.ProfileScreen}
      />
    </TabNav.Navigator>
  </NavigationContainer>
);

export default Router;
