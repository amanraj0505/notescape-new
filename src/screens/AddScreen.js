import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
function AddScreen() {
  const [numberOfCharacter, setNumberOfCharacters] = useState(0);
  const inputRef = useRef();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 2}}>
          <Text
            style={{
              color: '#B2B2B2',
              marginTop: 15,
              marginLeft: 20,
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            {new Date().toLocaleString() +
              ' | ' +
              numberOfCharacter +
              ' Characters'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginRight: 5,
            alignItems: 'center',
            marginTop: 15,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/paint-palette.png')}
              resizeMode={'contain'}
              style={{
                height: 15,
                width: 15,
                tintColor: '#2196F3',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/undo.png')}
              resizeMode={'contain'}
              style={{
                height: 15,
                width: 15,
                tintColor: '#2196F3',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/tick.png')}
              resizeMode={'contain'}
              style={{
                height: 15,
                width: 15,
                tintColor: '#2196F3',
              }}
            />
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
          }}
          placeholder={'Title'}
          placeholderTextColor={'#B2B2B2'}
        />
        <TextInput
          style={{
            borderRadius: 20,
            padding: 10,
            color: '#000',
            flexWrap: 'wrap',
            marginTop: 5,
            marginHorizontal: 15,
          }}
          placeholder={'Type Notes Here..'}
          multiline={true}
          placeholderTextColor={'#B2B2B2'}
          ref={inputRef}
          onChangeText={text => {
            setNumberOfCharacters(text.length);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default AddScreen;
