import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setOnboardingPreference(preference) {
  try {
    if (preference) await AsyncStorage.setItem('OnboardingDone', 'true');
  } catch (err) {
    console.log(err);
  }
}
export async function getOnboardingPrefernce() {
  try {
    return await AsyncStorage.getItem('OnboardingDone');
  } catch (err) {
    console.log(err);
  }
}
