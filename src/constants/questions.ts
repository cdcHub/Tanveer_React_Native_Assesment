import {QuestionType} from '@types';

export const questions: QuestionType[] = [
  {
    id: 1,
    question: 'What is your primary goal for investing?',
    options: [
      {text: 'Capital preservation', score: 1},
      {text: 'Income generation', score: 2},
      {text: 'Wealth accumulation', score: 3},
    ],
  },
  {
    id: 2,
    question: 'How long do you plan to keep your money invested?',
    options: [
      {text: 'Less than 1 year', score: 1},
      {text: '1 to 5 years', score: 2},
      {text: 'More than 5 years', score: 3},
    ],
  },
  {
    id: 3,
    question:
      'How do you typically respond to financial news suggesting market volatility?',
    options: [
      {text: 'I avoid investing during such times', score: 1},
      {text: 'I reduce my investments temporarily', score: 2},
      {text: 'I ignore such news', score: 3},
      {text: 'I see it as normal and maintain investments', score: 4},
      {text: 'I look for opportunities to invest more', score: 5},
    ],
  },
  {
    id: 4,
    question: 'How diversified is your current investment portfolio?',
    options: [
      {text: 'Not diversified', score: 1},
      {text: 'Slightly diversified', score: 2},
      {text: 'Moderately diversified', score: 3},
      {text: 'Highly diversified', score: 5},
    ],
  },
  {
    id: 5,
    question: 'What is your reaction to a 20% drop in your investment value?',
    options: [
      {text: 'Sell all investments immediately', score: 1},
      {text: 'Reduce exposure', score: 2},
      {text: 'Do nothing', score: 4},
      {text: 'Invest more at discounted prices', score: 5},
    ],
  },
];
