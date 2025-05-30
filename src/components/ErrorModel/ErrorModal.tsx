import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useErrorModal} from '@store/useErrorModal';
import RegularText from '@components/CustomText/RegularText';
import colors from '@theme/colors';
import appStyles from '@theme/appStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import spacing from '@theme/spacing';

const ErrorModal = () => {
  const {top} = useSafeAreaInsets();
  const {errorMessage, clearError} = useErrorModal();
  const translateY = useSharedValue(-100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    if (errorMessage && translateY.value === -100) {
      translateY.value = withSequence(
        withTiming(20, {duration: 500}),
        withDelay(
          1000,
          withTiming(-100, {duration: 700}, () => {
            runOnJS(clearError)();
          }),
        ),
      );
    }
  }, [clearError, errorMessage, top, translateY]);

  return (
    <Animated.View
      style={[styles.errorContainer, appStyles.center, animatedStyle]}>
      <RegularText style={styles.errorText}>{errorMessage}</RegularText>
    </Animated.View>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  errorContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: colors.red,
    alignSelf: 'center',
    paddingHorizontal: spacing.medium,
    borderRadius: spacing.medium,
    paddingVertical: spacing.small,
    maxWidth: '90%',
    alignItems: 'center',
  },
  errorText: {
    color: colors.white,
  },
});
