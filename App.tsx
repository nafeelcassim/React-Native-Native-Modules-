/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import NativeLocalStorage from './specs/NativeLocalStorage';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem('myKey');
    console.log(storedValue ?? '');
  }, []);



  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Native Modules</Text>
    </SafeAreaView>
  );
}



export default App;
