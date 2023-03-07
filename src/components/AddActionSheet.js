import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
function AddActionSheet({sheetId, payload}) {
  const actionSheetRef = useRef();
  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
      indicatorStyle={{
        width: 100,
      }}
      gestureEnabled={true}>
      <View
        style={{
          paddingHorizontal: 20,
          height: 180,
          width: '100%',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3C3C43',
              opacity: 0.8,
            }}>
            Add Item
          </Text>
        </View>
        <View
          style={{
            flex: 6,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              SheetManager.hide('add-actionsheet');
              payload.navigation.navigate('Add');
            }}>
            <Image
              source={require('../assets/images/notes.png')}
              resizeMode={'contain'}
              style={{
                height: 28,
                width: 28,
                tintColor: '#3C3C43',
                opacity: 0.8,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#3C3C43',
                opacity: 0.8,
                marginLeft: 20,
              }}>
              Add Note
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              SheetManager.hide('add-actionsheet');
              payload.navigation.navigate('AddPassword');
            }}>
            <Image
              source={require('../assets/images/key.png')}
              resizeMode={'contain'}
              style={{
                height: 28,
                width: 28,
                tintColor: '#3C3C43',
                opacity: 0.8,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#3C3C43',
                opacity: 0.8,
                marginLeft: 20,
              }}>
              Add Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
}

export default AddActionSheet;
