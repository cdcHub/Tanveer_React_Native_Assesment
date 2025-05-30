import React from 'react';
import {render} from '@testing-library/react-native';
import BoldText from '../BoldText';

describe('BoldText component', () => {
  it('renders children text correctly', () => {
    const {getByText} = render(<BoldText>Test Bold Text</BoldText>);
    const textElement = getByText('Test Bold Text');
    expect(textElement).toBeTruthy();
  });

  it('applies bold style by default', () => {
    const {getByText} = render(<BoldText>Bold Style</BoldText>);
    const textElement = getByText('Bold Style');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({fontWeight: 'bold'})]),
    );
  });

  it('accepts additional style props', () => {
    const customStyle = {color: 'red', fontSize: 30};
    const {getByText} = render(
      <BoldText style={customStyle}>Custom Style</BoldText>,
    );
    const textElement = getByText('Custom Style');

    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });
});
