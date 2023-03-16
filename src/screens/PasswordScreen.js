import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {SearchBox, AddActionSheet, PasswordItem} from '../components';
import {
  SheetManager,
  registerSheet,
  SheetProvider,
} from 'react-native-actions-sheet';
import {useSelector, useDispatch} from 'react-redux';
import {addNotes, deleteNotes} from '../redux/notesSlice';
function PasswordScreen(props) {
  registerSheet('add-actionsheet', AddActionSheet);
  const renderItem = useCallback(
    ({item}) => (
      <PasswordItem title={item.title} description={item.description} />
    ),
    [
      useSelector(state => state.notes.data).filter(
        item => item.type === 'password',
      ),
    ],
  );
  return (
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
          height: 75,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 10,
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
            Passwords
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
      <SearchBox />
      <View style={{flex: 1}}>
        <FlatList
          data={useSelector(state => state.notes.data).filter(
            item => item.type === 'password',
          )}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            marginTop: 15,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PasswordScreen;
