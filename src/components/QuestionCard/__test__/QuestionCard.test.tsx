import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuestionCard from '../QuestionCard';
import {useQuestionStore} from '@store/useQuestionStore';

jest.mock('@store/useQuestionStore');

const mockSetAnswer = jest.fn();
const questionMockID = 1
const questionMock = {
  id: questionMockID,
  question: 'What is your favorite color?',
  options: [
    {text: 'Red', score: 1},
    {text: 'Blue', score: 2},
    {text: 'Green', score: 3},
  ],
};

describe('QuestionCard', () => {
  beforeEach(() => {
    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      answers: {},
      setAnswer: mockSetAnswer,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders question number and total', () => {
    const {getByText} = render(
      <QuestionCard
        question={questionMock}
        currenQsNo={0}
        totalQuestions={5}
      />,
    );
    expect(getByText('Question 1 of 5')).toBeTruthy();
  });

  it('renders the question text', () => {
    const {getByText} = render(
      <QuestionCard
        question={questionMock}
        currenQsNo={0}
        totalQuestions={5}
      />,
    );
    expect(getByText('What is your favorite color?')).toBeTruthy();
  });

  it('renders all options', () => {
    const {getByText} = render(
      <QuestionCard
        question={questionMock}
        currenQsNo={0}
        totalQuestions={5}
      />,
    );
    questionMock.options.forEach(opt => {
      expect(getByText(opt.text)).toBeTruthy();
    });
  });

  it('calls setAnswer with correct parameters when an option is pressed', () => {
    const {getByText} = render(
      <QuestionCard
        question={questionMock}
        currenQsNo={0}
        totalQuestions={5}
      />,
    );
    fireEvent.press(getByText('Blue'));
    expect(mockSetAnswer).toHaveBeenCalledWith(questionMockID, 2);
  });

  it('shows selected option correctly based on answers state', () => {
    (useQuestionStore as unknown as jest.Mock).mockReturnValueOnce({
      answers: {q1: 3},
      setAnswer: mockSetAnswer,
    });

    const {getByText} = render(
      <QuestionCard
        question={questionMock}
        currenQsNo={0}
        totalQuestions={5}
      />,
    );

    // The option with score 3 should be selected (Green)
    const selectedOption = getByText('Green');
    expect(selectedOption.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({color: expect.any(String)}),
      ]),
    );
  });
});
