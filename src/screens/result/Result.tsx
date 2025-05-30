import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import appStyles from '@theme/appStyle';
import {BoldText, FilledButton, RegularText, Spacer} from '@components/index';
import {useQuestionStore} from '@store/useQuestionStore';
import fontsize from '@theme/fontsize';
import {questions} from '@constants/questions';
import {useNavigation} from '@react-navigation/native';

const MinScore = questions.length;
const MaxScore = questions.reduce((totalScore, question) => {
  const questionScore = question.options.reduce(
    (sum, option) => sum + option.score,
    0,
  );
  return totalScore + questionScore;
}, 0);
const AvgScore = (MinScore + MaxScore) / 2;

const Result = () => {
  const navigation = useNavigation();
  const {total, reset} = useQuestionStore();
  const getRiskCategory = () => {
    if (total <= questions.length) {
      return 'Low';
    }
    if (total <= AvgScore) {
      return 'Medium';
    }
    return 'High';
  };
  const getDetails = () => {
    switch (getRiskCategory()) {
      case 'Low':
        return 'Consider low-risk options like savings accounts, fixed deposits, or bonds.';
      case 'Medium':
        return 'You might benefit from mutual funds or a balanced equity/debt portfolio.';
      case 'High':
        return 'You may explore stocks, ETFs, or even high-growth ventures.';
      default:
        return '';
    }
  };
  const onBackToHomeClick = () => {
    reset();
    navigation.goBack();
  };
  return (
    <View style={[appStyles.flex, appStyles.backgroundColor, appStyles.center]}>
      <View style={[appStyles.center, styles.titleContainer]}>
        <BoldText style={styles.appTitle}>Risk Profile Summary</BoldText>
      </View>
      <View style={[styles.container, appStyles.center]}>
        <View style={[styles.circle, appStyles.center]}>
          <BoldText style={styles.score}>
            {total}/{MaxScore}
          </BoldText>
        </View>
        <BoldText>Score</BoldText>
        <Spacer />
        <RegularText>
          Your Risk Profile: <BoldText>{getRiskCategory()}</BoldText>
        </RegularText>
        {getDetails() && (
          <RegularText style={styles.subtext}>{getDetails()}</RegularText>
        )}
      </View>
      <FilledButton
        label="Back to Home & Try Again"
        onPress={onBackToHomeClick}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    marginBottom: spacing.large,
    borderRadius: spacing.medium,
    minHeight: '50%',
    width: '90%',

    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  appTitle: {
    fontSize: fontsize.h1,
    textAlign: 'center',
  },
  titleContainer: {
    flex: 0.4,
  },
  subtext: {
    fontSize: fontsize.h4,
    textAlign: 'center',
    marginTop: spacing.medium,
  },
  circle: {
    height: 140,
    width: undefined,
    aspectRatio: 1,
    borderRadius: 140 / 2,
    borderWidth: 10,
    borderColor: colors.primary,
    marginBottom: spacing.medium,
    backgroundColor: colors.primary50,
  },
  score: {
    fontSize: fontsize.h1,
  },
});
