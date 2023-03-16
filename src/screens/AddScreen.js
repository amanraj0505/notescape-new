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
import {addNotes} from '../redux/notesSlice';
import {useDispatch, useSelector} from 'react-redux';
function AddScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();
  const lastItemID = useSelector(state => state.notes.data)[
    useSelector(state => state.notes.data).length - 1
  ].id;
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
            }}
            onPress={() => {
              dispatch(
                addNotes({
                  id: String(parseInt(lastItemID) + 1),
                  title: title,
                  content: note,
                  type: 'note',
                }),
              );
              navigation.goBack();
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
          onChangeText={text => {
            setTitle(text);
          }}
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
          onChangeText={text => {
            setNote(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default AddScreen;
