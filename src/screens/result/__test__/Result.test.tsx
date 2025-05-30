import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Result from '../Result';
import {useNavigation} from '@react-navigation/native';
import {useQuestionStore} from '@store/useQuestionStore';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@store/useQuestionStore', () => ({
  useQuestionStore: jest.fn(),
}));

const mockGoBack = jest.fn();
const mockReset = jest.fn();

describe('Result Screen', () => {
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({goBack: mockGoBack});
    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      total: 5,
      reset: mockReset,
    });
  });

  it('renders score and risk profile', () => {
    const {getByText,queryAllByText} = render(<Result />);
    expect(getByText('Risk Profile Summary')).toBeTruthy();
    expect(queryAllByText('5')).toBeTruthy();
    expect(getByText('Score')).toBeTruthy();
    expect(getByText(/Your Risk Profile:/)).toBeTruthy();
  });

  it('renders Low risk category and details', () => {
    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      total: 1,
      reset: mockReset,
    });
    const {getByText} = render(<Result />);
    expect(getByText('Low')).toBeTruthy();
    expect(getByText(/Consider low-risk options/)).toBeTruthy();
  });

  it('renders Medium risk category and details', () => {
    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      total: 10,
      reset: mockReset,
    });
    const {getByText} = render(<Result />);
    expect(getByText('Medium')).toBeTruthy();
    expect(getByText(/mutual funds or a balanced/)).toBeTruthy();
  });

  it('renders High risk category and details', () => {
    (useQuestionStore as unknown as jest.Mock).mockReturnValue({
      total: 100,
      reset: mockReset,
    });
    const {getByText} = render(<Result />);
    expect(getByText('High')).toBeTruthy();
    expect(getByText(/explore stocks, ETFs/)).toBeTruthy();
  });

  it('calls reset and goBack on button press', () => {
    const {getByText} = render(<Result />);
    fireEvent.press(getByText('Back to Home & Try Again'));
    expect(mockReset).toHaveBeenCalled();
    expect(mockGoBack).toHaveBeenCalled();
  });
});
