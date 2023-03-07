import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
function AddPasswordScreen({navigation}) {
  const inputRef = useRef();
  return (
    <SafeAreaView
      style={{
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
        }}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 22,
            }}
            onPress={() => {
              navigation.goBack();
            }}
            activeOpacity={1}>
            <Image
              source={require('../assets/images/Arrow.png')}
              resizeMode={'contain'}
              style={{height: 20, width: 12}}
            />
            <Text
              style={{
                fontSize: 15,
                marginStart: 10,
                color: '#007AFF',
              }}>
              {'Back'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 35,
              backgroundColor: '#007AFF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginRight: 22,
            }}>
            <Text style={{color: '#FFFFFF'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 6,
        }}>
        <TextInput
          style={{
            borderRadius: 20,
            padding: 10,
            color: '#000',
            marginTop: 5,
            flexWrap: 'wrap',
            marginHorizontal: 15,
            fontSize: 26,
            fontWeight: 'bold',
            lineHeight: 42,
          }}
          placeholder={'Title'}
          placeholderTextColor={'#B2B2B2'}
          place
        />
        <TextInput
          style={{
            borderRadius: 20,
            padding: 10,
            color: '#000',
            flexWrap: 'wrap',
            marginTop: 5,
            marginHorizontal: 15,
            fontSize: 16,
            lineHeight: 42,
          }}
          placeholder={'Type Notes Here..'}
          multiline={true}
          placeholderTextColor={'#B2B2B2'}
          ref={inputRef}
        />
      </View>
    </SafeAreaView>
  );
}

export default AddPasswordScreen;
