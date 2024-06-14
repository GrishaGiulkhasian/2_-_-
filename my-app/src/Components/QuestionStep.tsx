import React, { useState } from 'react';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import ShortAnswerQuestion from './ShortAnswerQuestion';
import LongAnswerQuestion from './LongAnswerQuestion';

const QuestionStep: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <SingleChoiceQuestion onNext={nextStep} />;
    case 2:
      return <MultipleChoiceQuestion onNext={nextStep} />;
    case 3:
      return <ShortAnswerQuestion onNext={nextStep} />;
    case 4:
      return <LongAnswerQuestion onNext={nextStep} />;
    default:
      return <div>Тест завершен</div>;
  }
};

export default QuestionStep;
