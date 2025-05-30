import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import RegularText from '@components/CustomText/RegularText';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import appStyles from '@theme/appStyle';
type Props = {
  label: string;
  onPress: () => void;
};
const TransparentButton: FC<Props> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, appStyles.center]}>
      <RegularText>{label}</RegularText>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
  },
  label: {
    color: colors.white,
  },
});
