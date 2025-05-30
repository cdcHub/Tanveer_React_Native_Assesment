import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FilledButton from '../FilledButton';

jest.mock('@components/CustomText/RegularText', () => {
  const {Text} = require('react-native');
  return ({children, ...rest}: any) => <Text {...rest}>{children}</Text>;
});

describe('FilledButton', () => {
  it('renders the label correctly', () => {
    const {getByText} = render(
      <FilledButton label="Click Me" onPress={() => {}} />,
    );

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockFn = jest.fn();

    const {getByText} = render(
      <FilledButton label="Submit" onPress={mockFn} />,
    );

    fireEvent.press(getByText('Submit'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
