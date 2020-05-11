import React, { Suspense } from 'react';
import { View, Text, StatusBar } from 'react-native';

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
        <Router />
      </Suspense>
    </>
  );
};

export default App;
