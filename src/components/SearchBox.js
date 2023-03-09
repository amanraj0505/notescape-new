import React, {useRef, useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
function SearchBox({textOnChange, searchText}) {
  const inputRef = useRef();
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15,
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
        ref={inputRef}
      />
    </View>
  );
}

export default SearchBox;
