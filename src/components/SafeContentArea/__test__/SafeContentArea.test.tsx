import React from 'react';
import {render} from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import SafeContentArea from '../SafeContentArea';

describe('SafeContentArea', () => {
  it('renders children properly', () => {
    (useSafeAreaInsets as jest.Mock).mockReturnValue({top: 0, bottom: 0});

    const {getByText} = render(
      <SafeContentArea>
        <Text>Test Child</Text>
      </SafeContentArea>,
    );

    expect(getByText('Test Child')).toBeTruthy();
  });

  it('renders top safe area with correct height and background color', () => {
    (useSafeAreaInsets as jest.Mock).mockReturnValue({top: 20, bottom: 0});

    const {getByTestId} = render(
      <SafeContentArea>
        <Text>Child</Text>
      </SafeContentArea>,
    );

    const topView = getByTestId('safe-area-top');
    expect(topView.props.style.height).toBe(20);
    expect(topView.props.style.backgroundColor).toBeDefined();
  });

  it('renders bottom safe area with correct height and background color', () => {
    (useSafeAreaInsets as jest.Mock).mockReturnValue({top: 0, bottom: 30});

    const {getByTestId} = render(
      <SafeContentArea>
        <Text>Child</Text>
      </SafeContentArea>,
    );

    const bottomView = getByTestId('safe-area-bottom');
    expect(bottomView.props.style.height).toBe(30);
    expect(bottomView.props.style.backgroundColor).toBeDefined();
  });
});
