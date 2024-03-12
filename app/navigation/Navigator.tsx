import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Home from "../screens/Home";
import Spots from "../screens/Spots";
import { useColorScheme } from "react-native";
import { LightTheme, DarkTheme } from "../config/theme";

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={options}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Spots" component={Spots} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
