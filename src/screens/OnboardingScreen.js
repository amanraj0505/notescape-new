import React, {useState, useRef} from 'react';
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
import {setOnboardingPreference} from '../utils/commonUtils';
import {useNavigation} from '@react-navigation/native';
const onBoardingData = [
  {
    title: 'Manage your notes & passwords easily',
    subtitle: 'A completely easy way to manage and customize your notes.',
    image: require('../assets/images/onboarding_image1.png'),
    nextButton: 'Next',
    id: '1',
  },
  {
    title: 'Organize your thoughts & ideas',
    subtitle: 'Most beautiful note taking application.',
    image: require('../assets/images/onboarding_image2.png'),
    nextButton: 'Next',
    id: '2',
  },
  {
    title: 'Create cards and easy styling',
    subtitle: 'Making your content legible has never been easier.',
    image: require('../assets/images/onboarding_image1.png'),
    nextButton: 'Get Started',
    id: '3',
  },
];
function OnboardingScreen(props) {
  const {width} = useWindowDimensions();
  const [pageIndex, setPageIndex] = useState(0);
  const flatListRef = useRef();
  const navigation = useNavigation();
  renderItem = ({item}) => {
    return (
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            display: 'flex',
          },
          {width},
        ]}>
        <Image
          source={item.image}
          style={{
            flex: 0.6,
          }}
          resizeMode={'contain'}
        />
        <View
          style={{
            flex: 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              height: 80,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              height: 60,
              marginTop: 10,
            }}>
            {item.subtitle}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F2F6',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={'#F2F2F6'}
      />
      <View
        style={{
          height: 40,
          marginTop: 20,
          paddingHorizontal: 22,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.5,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              if (pageIndex >= 1) {
                flatListRef.current.scrollToIndex({
                  index: pageIndex - 1,
                  animated: true,
                });
                setPageIndex(pageIndex - 1);
              }
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
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.5,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            activeOpacity={1}
            onPress={() => {
              navigation.replace('Tab');
              setOnboardingPreference(true);
            }}>
            <Text
              style={{
                fontSize: 15,
                marginStart: 10,
                color: '#007AFF',
              }}>
              {'Skip'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.85}}>
        <FlatList
          data={onBoardingData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          scrollEnabled={false}
        />
      </View>
      <View
        style={{
          flex: 0.15,
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: '90%',
            backgroundColor: '#007AFF',
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPress={() => {
            if (pageIndex <= 1) {
              flatListRef.current.scrollToIndex({
                index: pageIndex + 1,
                animated: true,
              });
              setPageIndex(pageIndex + 1);
            }
            if (onBoardingData[pageIndex].id === '3') {
              navigation.replace('Tab');
              setOnboardingPreference(true);
            }
          }}>
          <Text style={{color: '#FFFFFF'}}>
            {onBoardingData[pageIndex].nextButton}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
