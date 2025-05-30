import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionnaireScreen from '../QuestionnaireScreen';
import {useQuestions} from '@hooks';
import {useQuestionStore} from '@store/useQuestionStore';
import {useErrorModal} from '@store/useErrorModal';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('@hooks', () => ({
  useQuestions: jest.fn(),
}));

jest.mock('@store/useQuestionStore', () => ({
  useQuestionStore: jest.fn(),
}));

jest.mock('@store/useErrorModal', () => ({
  useErrorModal: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('QuestionnaireScreen', () => {
  const setErrorMessage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useQuestions as jest.Mock).mockReturnValue({
      currentQuestion: {id: 'q1', text: 'Question 1'},
      nextQs: jest.fn(),
      previousQs: jest.fn(),
      totalQuestions: 5,
      currentIndex: 1,
      isFirst: false,
      isLast: false,
    });

    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      answers: {}, // initially no answers
    });

    (useErrorModal as unknown as jest.Mock).mockReturnValue({
      setErrorMessage,
    });
  });

  it('renders title', () => {
    const {getByText} = render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );
    expect(getByText('Risk Profile Questionnaire Mobile App')).toBeTruthy();
  });

  it('shows error if trying to go to next without selecting an option', () => {
    const {getByText} = render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );
    fireEvent.press(getByText('Next Question'));
    expect(setErrorMessage).toHaveBeenCalledWith(
      'Please select an option first',
    );
  });

  it('goes to next question if current question is answered', () => {
    const nextQs = jest.fn();

    (useQuestions as jest.Mock).mockReturnValue({
      currentQuestion: {id: 'q1', text: 'Question 1'},
      nextQs,
      previousQs: jest.fn(),
      totalQuestions: 5,
      currentIndex: 1,
      isFirst: false,
      isLast: false,
    });

    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      answers: {q1: 'Yes'},
    });

    const {getByText} = render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    fireEvent.press(getByText('Next Question'));
    expect(nextQs).toHaveBeenCalled();
  });

  it('shows error on submit if not all questions are answered', () => {
    const setErrorMessage = jest.fn();

    (useQuestions as jest.Mock).mockReturnValue({
      currentQuestion: {id: 'q1', text: 'Question 1'},
      nextQs: jest.fn(),
      previousQs: jest.fn(),
      totalQuestions: 5,
      currentIndex: 4,
      isFirst: false,
      isLast: true,
    });

    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      answers: {q1: 'Yes', q2: 'Yes'}, // not all answered
    });

    (useErrorModal as unknown as jest.Mock).mockReturnValue({
      setErrorMessage,
    });

    const {getByText} = render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    fireEvent.press(getByText('Submit'));
    expect(setErrorMessage).toHaveBeenCalledWith(
      'Please attemp all questions, go back and attemp again',
    );
  });

  it('navigates to Result screen on submit if all questions are answered', () => {
    (useQuestions as jest.Mock).mockReturnValue({
      currentQuestion: {id: 'q5', text: 'Question 5'},
      nextQs: jest.fn(),
      previousQs: jest.fn(),
      totalQuestions: 5,
      currentIndex: 4,
      isFirst: false,
      isLast: true,
    });

    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      answers: {
        q1: 'Yes',
        q2: 'Yes',
        q3: 'Yes',
        q4: 'Yes',
        q5: 'Yes',
      },
    });

    const {getByText} = render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    fireEvent.press(getByText('Submit'));
    expect(mockNavigate).toHaveBeenCalledWith('Result');
  });
});
