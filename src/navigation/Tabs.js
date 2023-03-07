import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  NotesScreen,
  PasswordScreen,
  SettingsScreen,
  AddScreen,
  HiddenScreen,
  AddPasswordScreen,
} from '../screens';
import {Text, View, Image} from 'react-native';
import {TabStyles} from '../styles/styles';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const NotesScreenStack = createStackNavigator();
const NotesScreenStacks = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Add' || routeName === 'AddPassword') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarShowLabel: false,
        tabBarStyle: {
          ...TabStyles.tabBarStyle,
        },
        headerShown: false,
      });
    }
  }, [navigation, route]);
  return (
    <NotesScreenStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}>
      <NotesScreenStack.Screen name="Notes" component={NotesScreen} />
      <NotesScreenStack.Screen name="Add" component={AddScreen} />
      <NotesScreenStack.Screen
        name="AddPassword"
        component={AddPasswordScreen}
      />
    </NotesScreenStack.Navigator>
  );
};
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...TabStyles.tabBarStyle,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="NotesStack"
        component={NotesScreenStacks}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={TabStyles.tabIconView}>
                <Image
                  source={require('../assets/images/notes.png')}
                  style={{
                    ...TabStyles.tabIcon,
                    tintColor: focused ? '#3A85F7' : '#1C2121',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#3A85F7' : '#1C2121',
                    marginTop: 5,
                    opacity: 0.7,
                  }}>
                  Notes
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={TabStyles.tabIconView}>
                <Image
                  source={require('../assets/images/key.png')}
                  style={{
                    ...TabStyles.tabIcon,
                    tintColor: focused ? '#3A85F7' : '#1C2121',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#3A85F7' : '#1C2121',
                    marginTop: 5,
                    opacity: 0.7,
                  }}>
                  Passwords
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Hidden"
        component={HiddenScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={TabStyles.tabIconView}>
                <Image
                  source={require('../assets/images/hidden.png')}
                  style={{
                    ...TabStyles.tabIcon,
                    tintColor: focused ? '#3A85F7' : '#1C2121',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#3A85F7' : '#1C2121',
                    marginTop: 5,
                    opacity: 0.7,
                  }}>
                  Hidden
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={TabStyles.tabIconView}>
                <Image
                  source={require('../assets/images/settings.png')}
                  style={{
                    ...TabStyles.tabIcon,
                    tintColor: focused ? '#3A85F7' : '#1C2121',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#3A85F7' : '#1C2121',
                    marginTop: 5,
                    opacity: 0.7,
                  }}>
                  Settings
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
