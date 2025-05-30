import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import appStyles from '@theme/appStyle';
import {ErrorModal, SafeContentArea} from '@components/index';
import RootStack from '@navigation/RootStack';

const App: FC = () => {
  return (
    <SafeAreaProvider style={[appStyles.flex, appStyles.backgroundColor]}>
      <SafeContentArea>
        <RootStack />
        <ErrorModal />
      </SafeContentArea>
    </SafeAreaProvider>
  );
};

export default App;
