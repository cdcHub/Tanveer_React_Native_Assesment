import * as React from 'react';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QuestionnaireScreen, Result} from '@screens/index';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    QuestionnaireScreen,
    Result,
  },
});
const RootNavigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export default () => {
  return <RootNavigation />;
};
