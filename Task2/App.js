import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Main } from './src/activities';
import {store} from './src/Redux/store';
import {Provider} from 'react-redux';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
        <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Main />
    </SafeAreaView>
  </Provider>
  );
};

export default App;
