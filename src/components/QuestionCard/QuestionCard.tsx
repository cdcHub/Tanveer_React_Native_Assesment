import {StyleSheet, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {QuestionType} from '@types';
import BoldText from '@components/CustomText/BoldText';
import fontsize from '@theme/fontsize';
import colors from '@theme/colors';
import spacing from '@theme/spacing';
import Option from './components/Option';
import RegularText from '@components/CustomText/RegularText';
import {useQuestionStore} from '@store/useQuestionStore';
import Spacer from '@components/Spacer/Spacer';

type QuestionCardProps = {
  question: QuestionType;
  totalQuestions: number;
  currenQsNo: number;
};
const QuestionCard: FC<QuestionCardProps> = ({
  question: {id, options, question},
  currenQsNo,
  totalQuestions,
}) => {
  const {answers, setAnswer} = useQuestionStore();

  const handleOptionPress = useCallback(
    (score: number) => {
      setAnswer(id, score);
    },
    [id, setAnswer],
  );
  return (
    <View style={styles.container}>
      <RegularText style={styles.questionNotxt}>{`Question ${
        currenQsNo + 1
      } of ${totalQuestions}`}</RegularText>
      <Spacer />
      <BoldText style={styles.qText}>{question}</BoldText>
      <Spacer />
      {options?.map((opt, index) => {
        let isLastItem = index === options.length - 1;
        let isSelected = answers[id] === opt.score;

        return (
          <View key={index}>
            <Option
              text={opt.text}
              isSelected={isSelected}
              index={index}
              onPress={() => handleOptionPress(opt.score)}
            />
            {!isLastItem && <Spacer />}
          </View>
        );
      })}
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    marginBottom: spacing.large,
    borderRadius: spacing.medium,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  qText: {fontSize: fontsize.h2, textAlign: 'center'},
  optionalBtnContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },

  questionNotxt: {
    opacity: 0.5,
    alignSelf: 'center',
    fontSize: fontsize.h4,
  },
});
