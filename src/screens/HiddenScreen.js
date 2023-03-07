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
      }}>
      <StatusBar
        animated={true}
        backgroundColor="#F6F6F6"
        barStyle={'dark-content'}
      />
    </SafeAreaView>
  );
}

export default HiddenScreen;
