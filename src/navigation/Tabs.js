import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NotesScreen,
  PasswordScreen,
  CardScreen,
  SettingsScreen,
  AddScreen,
} from '../screens';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TabStyles} from '../styles/styles';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const NotesScreenStack = createNativeStackNavigator();
const NotesScreenStacks = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Add') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.shadow,
          ...TabStyles.tabBarStyle,
        },
        headerShown: false,
      });
    }
  }, [navigation, route]);
  return (
    <NotesScreenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NotesScreenStack.Screen name="Notes" component={NotesScreen} />
      <NotesScreenStack.Screen name="Add" component={AddScreen} />
    </NotesScreenStack.Navigator>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.shadow,
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
                    tintColor: focused ? '#2196F3' : '#a5b1c2',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#2196F3' : '#a5b1c2',
                    marginTop: 5,
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
                    tintColor: focused ? '#2196F3' : '#a5b1c2',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#2196F3' : '#a5b1c2',
                    marginTop: 5,
                  }}>
                  Passwords
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={CardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={TabStyles.tabIconView}>
                <Image
                  source={require('../assets/images/credit-card.png')}
                  style={{
                    ...TabStyles.tabIcon,
                    tintColor: focused ? '#2196F3' : '#a5b1c2',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#2196F3' : '#a5b1c2',
                    marginTop: 5,
                  }}>
                  Cards
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
                    tintColor: focused ? '#2196F3' : '#a5b1c2',
                  }}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    color: focused ? '#2196F3' : '#a5b1c2',
                    marginTop: 5,
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
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
