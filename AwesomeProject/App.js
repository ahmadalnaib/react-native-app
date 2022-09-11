import React from 'react';
import { View} from 'react-native';
import Signin from './src/screens/auth/Signin'
import Signup from './src/screens/auth/Signup'
import Splash from './src/screens/auth/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {

  const theme={
    colors:{
      background:colors.white
    }
  }
  return(
    <SafeAreaProvider>
     <NavigationContainer theme={theme}>
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}}/>
        <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      </Stack.Navigator>
</NavigationContainer>
</SafeAreaProvider>

  );
};

export default App;
