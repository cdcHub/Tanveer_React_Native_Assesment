import {StyleSheet, Text, TextProps} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import colors from '@theme/colors';
import fontsize from '@theme/fontsize';

const BoldText: FC<PropsWithChildren<TextProps>> = ({
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

export default BoldText;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontsize.h3,
  },
});
