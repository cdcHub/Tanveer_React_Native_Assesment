import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TransparentButton from '../TransparentButton'; // adjust path if needed

jest.mock('@components/CustomText/RegularText', () => {
  const {Text} = require('react-native');
  return ({children, ...rest}: any) => <Text {...rest}>{children}</Text>;
});

describe('TransparentButton', () => {
  it('renders the label correctly', () => {
    const {getByText} = render(
      <TransparentButton label="Hello" onPress={() => {}} />,
    );
    expect(getByText('Hello')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <TransparentButton label="Tap Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Tap Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
