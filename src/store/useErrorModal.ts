import {create} from 'zustand';

type State = {
  errorMessage: string;
  setErrorMessage: (msg: string) => void;
  clearError: () => void;
};
export const useErrorModal = create<State>(set => ({
  errorMessage: '',
  setErrorMessage: errorMsg => set(() => ({errorMessage: errorMsg})),
  clearError: () => set({errorMessage: ''}),
}));
