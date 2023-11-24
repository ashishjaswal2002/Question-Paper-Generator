import Express from 'express';
import generateQuestionPaper from './questionGenerator.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = Express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;

app.use(Express.static('public'));

app.get('/generateQuestionPaper', (req, res) => {
  const totalMarks = 100;
  const difficultyDistribution = {
    Easy: 20,
    Medium: 50,
    Hard: 30,
  };

  const generatedQuestions = generateQuestionPaper(totalMarks, difficultyDistribution);

  res.json(generatedQuestions).status(200);
});

app.listen(port, function () {
  console.log('app listening on port ' + port);
});
