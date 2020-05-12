import React, { Suspense } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18next';

import Router from './router';

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <View>
            <Text>loading</Text>
          </View>
        }
      >
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </Suspense>
    </>
  );
};

export default App;
