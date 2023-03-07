import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import {SearchBox, AddActionSheet} from '../components';
import {
  SheetManager,
  registerSheet,
  SheetProvider,
} from 'react-native-actions-sheet';
function PasswordScreen(props) {
  registerSheet('add-actionsheet', AddActionSheet);
  return (
    <SheetProvider>
      <SafeAreaView
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: '#F2F2F6',
        }}>
        <StatusBar
          animated={true}
          backgroundColor="#F2F2F6"
          barStyle={'dark-content'}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 22,
          }}>
          <View
            style={{
              flex: 6,
              display: 'flex',
              height: '100%',
              width: '100%',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: '#3C3C43',
                fontSize: 13,
                marginTop: 20,
                opacity: 0.6,
              }}>
              {new Date().getDate() +
                ' ' +
                [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ][new Date().getMonth()] +
                ' ' +
                new Date().getFullYear()}
            </Text>
            <Text
              style={{
                color: '#1C2121',
                fontSize: 26,
                fontWeight: 'bold',
              }}>
              Notes
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#007AFF',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.5}
              onPress={() => {
                SheetManager.show('add-actionsheet', {
                  payload: {navigation: props.navigation},
                });
              }}>
              <Image
                source={require('../assets/images/plus.png')}
                resizeMode={'contain'}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 7,
            backgroundColor: '#F2F2F6',
          }}>
          <SearchBox />
        </View>
      </SafeAreaView>
    </SheetProvider>
  );
}

export default PasswordScreen;
