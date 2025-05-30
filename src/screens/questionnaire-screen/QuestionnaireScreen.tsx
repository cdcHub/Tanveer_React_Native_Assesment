import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import appStyles from '@theme/appStyle';
import {useQuestions} from '@hooks';
import QuestionCard from '@components/QuestionCard/QuestionCard';
import {BoldText, FilledButton, TransparentButton} from '@components/index';
import fontsize from '@theme/fontsize';
import {useQuestionStore} from '@store/useQuestionStore';
import {StaticScreenProps, useNavigation} from '@react-navigation/native';
import {useErrorModal} from '@store/useErrorModal';
import {questions} from '@constants/questions';

type QuestionnaireScreenProps = StaticScreenProps<undefined>;
const QuestionnaireScreen: FC<QuestionnaireScreenProps> = () => {
  const navigation = useNavigation();
  const {answers} = useQuestionStore();
  const {setErrorMessage} = useErrorModal();

  const {
    currentQuestion,
    nextQs,
    previousQs,
    totalQuestions,
    currentIndex,
    isFirst,
    isLast,
  } = useQuestions();

  const isALlQuestionFilled = () =>
    Object.keys(answers).length === questions.length;
  const onSubmit = () => {
    if (answers[currentQuestion.id] !== undefined && isALlQuestionFilled()) {
      navigation.navigate('Result');
    } else {
      setErrorMessage(
        !isALlQuestionFilled()
          ? 'Please attemp all questions, go back and attemp again'
          : 'Please select an option first',
      );
    }
  };
  const onNextQsClick = () => {
    if (answers[currentQuestion.id] !== undefined) {
      nextQs();
    } else {
      setErrorMessage('Please select an option first');
    }
  };
  return (
    <View style={[appStyles.flex, appStyles.backgroundColor]}>
      <View style={[appStyles.center, styles.titleContainer]}>
        <BoldText style={styles.appTitle}>
          Risk Profile Questionnaire Mobile App
        </BoldText>
      </View>
      {currentQuestion && (
        <View style={styles.contentContainer}>
          <QuestionCard
            question={currentQuestion}
            totalQuestions={totalQuestions}
            currenQsNo={currentIndex}
          />
          <View
            style={[
              appStyles.fullWidth,
              appStyles.rowCenter,
              !isFirst ? appStyles.spaceBetween : appStyles.flexEnd,
            ]}>
            {!isFirst && (
              <TransparentButton
                label="Previous Question"
                onPress={previousQs}
              />
            )}
            <FilledButton
              label={isLast ? 'Submit' : 'Next Question'}
              onPress={isLast ? onSubmit : onNextQsClick}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default QuestionnaireScreen;

const styles = StyleSheet.create({
  contentContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  appTitle: {
    fontSize: fontsize.h1,
    textAlign: 'center',
  },
  titleContainer: {
    flex: 0.5,
  },
});
