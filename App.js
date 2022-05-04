import React from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Animated} from 'react-native';
import counter from './src/counter.js'
import {
  DarkTheme as paperDarkTheme,
  DefaultTheme as paperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  ADD_INC,
  ADD_DEC,
} from './src/actions.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = props => {
  global.DEV = true;
  var {
    incDetails,
    decDetails,
  } = props.appreducer;

  
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
    <NavigationContainer>
       <Stack.Navigator>
    <Stack.Screen
      name="Redux Increment & Decrement"
      component={counter}
      options={{
        headerTintColor: 'blue',
        headerStyle: { backgroundColor: 'orange' },
      }}
    />
    
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider> 
    );

};




const mapStateToProps = ({appreducer}) => ({
  appreducer,
});

export default connect(mapStateToProps, {
  ADD_INC,
  ADD_DEC,
})(App);