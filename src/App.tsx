import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { BaseScreen } from './BaseScreen';

export interface AppScreenProps {
  text: string;
}

export enum AppScreen {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
}

export type AppScreens = {
  First: AppScreenProps;
  Second: AppScreenProps;
  Third: AppScreenProps;
};

export type BaseScreenRouteProp =
  | RouteProp<AppScreens, AppScreen.First>
  | RouteProp<AppScreens, AppScreen.Second>
  | RouteProp<AppScreens, AppScreen.Third>;

export type BaseScreenNavigationProp =
  | StackNavigationProp<AppScreens, AppScreen.First>
  | StackNavigationProp<AppScreens, AppScreen.Second>
  | StackNavigationProp<AppScreens, AppScreen.Third>;

const App: React.FC = (): React.ReactElement => {
  const Stack = createStackNavigator<AppScreens>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AppScreen.First}
          component={BaseScreen}
          initialParams={{ text: '1st screen' }}
        />
        <Stack.Screen
          name={AppScreen.Second}
          component={BaseScreen}
          initialParams={{ text: '2nd screen' }}
        />
        <Stack.Screen
          name={AppScreen.Third}
          component={BaseScreen}
          initialParams={{ text: '3rd screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
