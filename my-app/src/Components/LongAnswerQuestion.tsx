import React, { useState } from 'react';

interface LongAnswerQuestionProps {
  onNext: () => void;
}

const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({ onNext }) => {
  const [answer, setAnswer] = useState<string>('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <h2>Вопрос с развернутым ответом</h2>
      {/* Форма для ввода развернутого ответа */}
      <textarea value={answer} onChange={handleAnswerChange} />
      <button onClick={onNext}>Далее</button>
    </div>
  );
};

export default LongAnswerQuestion;
