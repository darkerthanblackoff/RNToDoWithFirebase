import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isTablet = () =>
  DeviceInfo.isTablet() || (Platform.OS === 'ios' && Platform.isPad);

let MOCK_WIDTH = 375;

export const entireScreenWidth = Dimensions.get('window').width;

if (isTablet()) {
  MOCK_WIDTH = Dimensions.get('window').width - 320;
}

export const rem = (remValue: number = 1): number =>
  (remValue * entireScreenWidth) / MOCK_WIDTH;

export const entireScreenHeight = Dimensions.get('window').height;

export const vh = (vhValue: number = 1): number =>
  (vhValue * entireScreenHeight) / 100;
