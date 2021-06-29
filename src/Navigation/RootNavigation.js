import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../Screens/SplashScreen";
import SigninScreen from "../Screens/SigninScreen";
import SignupScreen from "../Screens/SignupScreen";

const RootStack = createStackNavigator();

const RootNavigation = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="SignIn" component={SigninScreen} />
            <RootStack.Screen name="SignUp" component={SignupScreen} />
        </RootStack.Navigator>
    )
}

export default RootNavigation;