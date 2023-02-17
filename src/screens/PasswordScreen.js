import React from 'react';
import {SafeAreaView, View, Image, TouchableOpacity, Text} from 'react-native';
function PasswordScreen() {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#F6F6F6',
          flex: 1,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 4,
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: '#2196F3',
              fontSize: 35,
              fontWeight: 'bold',
              fontFamily: 'uchiyama',
              marginLeft: 15,
              marginTop: 20,
            }}>
            Passwords
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#B2B2B2',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.5}>
            <Image
              source={require('../assets/images/search.png')}
              resizeMode={'contain'}
              style={{
                height: 18,
                width: 18,
                tintColor: '#fff',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#2196F3',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.5}>
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
          backgroundColor: '#F6F6F6',
        }}></View>
    </SafeAreaView>
  );
}

export default PasswordScreen;
