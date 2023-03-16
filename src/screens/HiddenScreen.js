import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
function HiddenScreen(props) {
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
    </SafeAreaView>
  );
}

export default HiddenScreen;
