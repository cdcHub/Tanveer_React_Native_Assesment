import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import RegularText from '@components/CustomText/RegularText';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import appStyles from '@theme/appStyle';
import {uppercaseAlphabet} from '@utils';

type Props = {
  text: string;
  onPress: () => void;
  isSelected: boolean;
  index: number;
};

const Option: FC<Props> = ({text, onPress, isSelected, index}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.optionalBtnContainer, isSelected && styles.selectedBg]}>
      <RegularText style={[styles.alphaText, isSelected && styles.whiteText]}>
        {uppercaseAlphabet[index]}.
      </RegularText>
      <RegularText
        style={[appStyles.flex, isSelected && styles.whiteText, styles.text]}>
        {text}
      </RegularText>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  optionalBtnContainer: {
    backgroundColor: colors.white,
    paddingLeft: spacing.small,
    borderRadius: spacing.small,
    borderColor: colors.lightGrey,
    borderWidth: 0.5,
    flexDirection: 'row',

    alignItems: 'center',
    paddingVertical: spacing.medium,
  },
  selectedBg: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
  },
  whiteText: {
    color: colors.white,
  },
  alphaText: {
    height: '100%',
  },
  text: {
    flex: 2,
    width: '100%',
    paddingLeft: spacing.small,
  },
});
