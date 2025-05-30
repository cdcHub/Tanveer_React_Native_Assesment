import {create} from 'zustand';

type State = {
  answers: Record<number, number>;
  total: number;
  setAnswer: (questionId: number, score: number) => void;
  reset: () => void;
};

export const useQuestionStore = create<State>(set => ({
  answers: {},
  total: 0,
  setAnswer: (questionId, score) =>
    set(state => {
      const prevScore = state.answers[questionId] || 0;
      const newAnswers = {...state.answers, [questionId]: score};
      const newTotal = state.total - prevScore + score;

      return {
        answers: newAnswers,
        total: newTotal,
      };
    }),
  reset: () => set({answers: {}, total: 0}),
}));
