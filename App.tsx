import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import appStyles from '@theme/appStyle';
import {ErrorModal, SafeContentArea} from '@components/index';
import RootStack from '@navigation/RootStack';
import {Platform, StatusBar} from 'react-native';
import colors from '@theme/colors';

const App: FC = () => {
  return (
    <SafeAreaProvider style={[appStyles.flex, appStyles.backgroundColor]}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={colors.primary} />
      )}
      <SafeContentArea>
        <RootStack />
        <ErrorModal />
      </SafeContentArea>
    </SafeAreaProvider>
  );
};

export default App;
