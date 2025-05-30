import React from 'react';
import {render} from '@testing-library/react-native';
import Spacer from '../Spacer';
describe('Spacer', () => {
  it('renders a View with height 20', () => {
    const {getByTestId} = render(<Spacer />);
    const spacer = getByTestId('spacer');

    expect(spacer.props.style.height).toBe(20);
  });
});
