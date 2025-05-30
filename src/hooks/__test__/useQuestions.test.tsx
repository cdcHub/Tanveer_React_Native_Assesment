import {renderHook, act} from '@testing-library/react-hooks';
import useQuestions from '../useQuestions';

describe('useQuestions', () => {
  it('should initialize with first question', () => {
    const {result} = renderHook(() => useQuestions());
    expect(result.current.currentIndex).toBe(0);
  });

  it('should go to next question', () => {
    const {result} = renderHook(() => useQuestions());
    act(() => {
      result.current.nextQs();
    });
    expect(result.current.currentIndex).toBe(1);
  });
});
