import Questions from './questionDataBase.js';

function generateQuestionPaper(totalMarks, difficultyLevel) {
  const generatedQuestionPaper = [];

  for (const [difficulty, percentage] of Object.entries(difficultyLevel)) {
    const difficultyQuestions = Questions.filter(
      (question) => question.difficulty === difficulty
    );

    const questionCount =
      (Math.ceil(percentage / 100) * totalMarks) /
      (difficultyQuestions.length > 0 ? difficultyQuestions[0].marks : 1);

    const selectedQuestions = difficultyQuestions.slice(0, questionCount);

    generatedQuestionPaper.push(...selectedQuestions);
  }

  return generatedQuestionPaper;
}

export default generateQuestionPaper;
