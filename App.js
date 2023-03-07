import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {getOnboardingPrefernce} from './src/utils/commonUtils';
import Tabs from './src/navigation/Tabs';
import {OnboardingScreen} from './src/screens';
const OnBoardingStack = createNativeStackNavigator();
const App = () => {
  const [onboardingDone, setOnboardingDone] = useState(null);
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  useEffect(() => {
    getOnboardingPrefernce().then(data => {
      data ? setOnboardingDone(true) : setOnboardingDone(false);
    });
  }, []);
  return (
    <NavigationContainer>
      <OnBoardingStack.Navigator
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}>
        {!false && (
          <OnBoardingStack.Screen
            name="Onboarding"
            component={OnboardingScreen}
          />
        )}
        <OnBoardingStack.Screen
          name="Tab"
          component={Tabs}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </OnBoardingStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
