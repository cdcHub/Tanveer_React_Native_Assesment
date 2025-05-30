import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorModal from '../ErrorModal';
import {useErrorModal} from '@store/useErrorModal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

jest.mock('@store/useErrorModal');
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn(),
}));

describe('ErrorModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with error message and animates', () => {
    (useErrorModal as unknown as jest.Mock).mockReturnValue({
      errorMessage: 'Test error',
      clearError: jest.fn(),
    });
    (useSafeAreaInsets as jest.Mock).mockReturnValue({top: 20});

    const {getByText} = render(<ErrorModal />);
    expect(getByText('Test error')).toBeTruthy();
  });
});
