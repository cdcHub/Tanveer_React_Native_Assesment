import {useState} from 'react';
import {questions} from '@constants/questions';
import {QuestionType} from '@types';

const useQuestions = () => {
  const totalQuestions = questions.length;
  const [qsIndex, setQsIndex] = useState<number>(0);

  const currentQuestion: QuestionType = questions[qsIndex];

  const nextQs = () => {
    setQsIndex(prev => (prev < totalQuestions - 1 ? prev + 1 : prev));
  };

  const previousQs = () => {
    setQsIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  const isFirst = qsIndex === 0;
  const isLast = qsIndex === totalQuestions - 1;

  return {
    currentQuestion,
    currentIndex: qsIndex,
    totalQuestions,
    isFirst,
    isLast,
    nextQs,
    previousQs,
  };
};

export default useQuestions;
