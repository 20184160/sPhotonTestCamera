import  React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import TakePhoto from "./components/TakePhoto";
import ViewPhoto from "./components/ViewPhoto";
const  App = () =>{
  const Stack = createNativeStackNavigator();

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Take Photo" component={TakePhoto}/>
          <Stack.Screen name="View Photo" component={ViewPhoto}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;