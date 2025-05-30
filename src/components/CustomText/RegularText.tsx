import {StyleSheet, Text, TextProps} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import colors from '@theme/colors';
import fontsize from '@theme/fontsize';

const RegularText: FC<PropsWithChildren<TextProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: fontsize.h3,
  },
});
