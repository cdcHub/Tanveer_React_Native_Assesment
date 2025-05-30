import React from 'react';
import {render} from '@testing-library/react-native';
import RegularText from '../RegularText';

describe('RegularText component', () => {
  it('renders children text correctly', () => {
    const {getByText} = render(<RegularText>Hello Regular Text</RegularText>);
    expect(getByText('Hello Regular Text')).toBeTruthy();
  });

  it('applies default styles correctly', () => {
    const {getByText} = render(<RegularText>Styled Text</RegularText>);
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: expect.any(String),
          fontSize: expect.any(Number),
        }),
      ]),
    );
  });

  it('accepts and merges additional styles', () => {
    const customStyle = {color: 'blue', fontWeight: '600'};
    const {getByText} = render(
      <RegularText style={customStyle}>Custom Style</RegularText>,
    );
    const textElement = getByText('Custom Style');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });
});
