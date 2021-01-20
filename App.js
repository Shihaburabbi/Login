// import React from 'react'
// import { View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'
// import Login from './src/screen/Login'




// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//            headerShown: false
//         }}
//       >
//         <Stack.Screen name="Login" component={Login} />


//       </Stack.Navigator>
//     </NavigationContainer>

//   )
// }

// export default App



import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App