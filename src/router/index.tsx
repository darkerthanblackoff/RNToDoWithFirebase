import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import * as VIEWS from '../views';
import { ROUTES } from '../constants';
import { BottomTabBar } from '../components';
import { STORAGE_KEYS } from '../constants';

const TabNav = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const getAuthStack = (isFirstLaunch: string) => (
  <AuthStack.Navigator
    initialRouteName={ROUTES.AUTH_FLOW.INITIAL_SCREEN}
    headerMode="none"
  >
    {isFirstLaunch === 'true' ? (
      <AuthStack.Screen
        name={ROUTES.AUTH_FLOW.INITIAL_SCREEN}
        component={VIEWS.OnboardingScreen}
      />
    ) : (
      <AuthStack.Screen
        name={ROUTES.AUTH_FLOW.INITIAL_SCREEN}
        component={VIEWS.AuthScreen}
      />
    )}
    <AuthStack.Screen
      name={ROUTES.AUTH_FLOW.SIGN_IN}
      component={VIEWS.SignInScreen}
    />
    <AuthStack.Screen
      name={ROUTES.AUTH_FLOW.SIGN_UP}
      component={VIEWS.SignUpScreen}
    />
    <AuthStack.Screen
      name={ROUTES.AUTH_FLOW.FORGOT_PASS}
      component={VIEWS.ForgotPasswordScreen}
    />
    <AuthStack.Screen
      name={ROUTES.AUTH_FLOW.RESET_PASS}
      component={VIEWS.ResetPasswordScreen}
    />
  </AuthStack.Navigator>
);

const getTabNav = () => (
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
);

const Router = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState('true');
  const [isAuthentificated, setAuthentificated] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEYS.FIRST_LAUNCH)
      .then((value) => {
        setIsFirstLaunch(`${value === null ? true : false}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isFirstLaunch]);
  useEffect(() => {}, [isAuthentificated]);

  return (
    <NavigationContainer>
      {!isAuthentificated ? getAuthStack(isFirstLaunch) : getTabNav()}
    </NavigationContainer>
  );
};
export default Router;
