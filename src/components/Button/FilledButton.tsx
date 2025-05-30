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
const FilledButton: FC<Props> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, appStyles.center]}>
      <RegularText style={styles.label}>{label}</RegularText>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    height: 40,
    paddingHorizontal: spacing.medium,
    borderRadius: spacing.small,
  },
  label: {
    color: colors.white,
  },
});
