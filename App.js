import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {getOnboardingPrefernce} from './src/utils/commonUtils';
import Tabs from './src/navigation/Tabs';
import {OnboardingScreen} from './src/screens';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
const OnBoardingStack = createStackNavigator();
const App = () => {
  const [onboardingDone, setOnboardingDone] = useState(null);
  useEffect(() => {
    getOnboardingPrefernce().then(data => {
      data ? setOnboardingDone(true) : setOnboardingDone(false);
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <OnBoardingStack.Navigator
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}>
          {!onboardingDone && (
            <OnBoardingStack.Screen
              name="Onboarding"
              component={OnboardingScreen}
            />
          )}
          <OnBoardingStack.Screen name="Tab" component={Tabs} />
        </OnBoardingStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
