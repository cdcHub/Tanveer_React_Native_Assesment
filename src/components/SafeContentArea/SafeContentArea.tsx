import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import appStyles from '@theme/appStyle';
import colors from '@theme/colors';

const SafeContentArea: FC<PropsWithChildren> = ({children}) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[appStyles.flex]}>
      {top > 0 && (
        <View
          collapsable={false}
          style={{height: top, backgroundColor: colors.primary}}
          testID="safe-area-top"
        />
      )}
      <View style={appStyles.flex}>{children}</View>
      {bottom > 0 && (
        <View
          collapsable={false}
          style={{height: bottom, backgroundColor: colors.primary}}
          testID="safe-area-bottom"
        />
      )}
    </View>
  );
};

export default SafeContentArea;

const styles = StyleSheet.create({});
