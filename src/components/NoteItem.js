import React from 'react';
import {View, Text} from 'react-native';
function NoteItem({title, content}) {
  return (
    <View
      style={{
        width: '50%',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#007AFF',
        padding: 10,
        marginBottom: 10, // for every item bottom
        marginRight: 10, // for every item right
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#1C2121',
        }}>
        {title}
      </Text>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#000000',
          opacity: 0.2,
          marginVertical: 5,
        }}
      />
      <Text>{content}</Text>
    </View>
  );
}

export default NoteItem;
