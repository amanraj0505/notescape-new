import React from 'react';
import {View, Text, Image} from 'react-native';
function NoteItem({title, description}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#F7CE45',
        borderRadius: 10,
        padding: 10,
        opacity: 0.7,
        marginBottom: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#1C2121',
            flex: 1,
          }}>
          {title}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            source={require('../assets/images/padlock.png')}
            resizeMode={'contain'}
            style={{width: 20, height: 20, opacity: 0.7}}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#000000',
          opacity: 0.2,
          marginVertical: 5,
        }}
      />
      <Text>{description}</Text>
    </View>
  );
}

export default NoteItem;
