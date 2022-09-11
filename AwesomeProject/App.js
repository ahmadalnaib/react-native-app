import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Signin from './src/screens/auth/Signin'
// import Splash from './src/screens/auth/Splash';



const App = () => {
  return(
  <SafeAreaView>

 
   <View>
    {/* <Splash/> */}
    <Signin/>
</View>
</SafeAreaView>
  );
};

export default App;
