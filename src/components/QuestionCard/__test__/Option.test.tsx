import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {uppercaseAlphabet} from '@utils';
import Option from '../components/Option';

describe('Option component', () => {
  const mockOnPress = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the text and alphabetical index correctly', () => {
    const {getByText} = render(
      <Option
        text="Option Text"
        onPress={mockOnPress}
        isSelected={false}
        index={1}
      />,
    );

    expect(getByText(`${uppercaseAlphabet[1]}.`)).toBeTruthy();
    expect(getByText('Option Text')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByText} = render(
      <Option
        text="Press Me"
        onPress={mockOnPress}
        isSelected={false}
        index={0}
      />,
    );

    fireEvent.press(getByText('Press Me'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('applies selected styles when isSelected is true', () => {
    const {getByText} = render(
      <Option
        text="Selected Option"
        onPress={mockOnPress}
        isSelected={true}
        index={0}
      />,
    );

    const alphaText = getByText(`${uppercaseAlphabet[0]}.`);
    const optionText = getByText('Selected Option');

    expect(alphaText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({color: expect.any(String)}),
      ]),
    );
    expect(optionText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({color: expect.any(String)}),
      ]),
    );
  });
});
