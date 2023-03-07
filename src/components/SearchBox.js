import React, {useRef, useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
function SearchBox({textOnChange, searchText}) {
  const [cancelVisible, setCancelVisible] = useState(false);
  const inputRef = useRef();
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 22,
      }}>
      <TextInput
        style={{
          borderRadius: 10,
          flex: 4,
          height: 40,
          paddingHorizontal: 20,
          backgroundColor: '#FFFFFF',
        }}
        placeholder={'Search Notes...'}
        placeholderTextColor={'#a5b1c2'}
        onChange={textOnChange}
        value={searchText}
        onFocus={() => setCancelVisible(true)}
        onBlur={() => setCancelVisible(false)}
        ref={inputRef}
      />
      {cancelVisible && (
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {
            inputRef.current.blur();
          }}>
          <Text style={{color: '#a5b1c2'}}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default SearchBox;
