export type QuestionType = {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
};
