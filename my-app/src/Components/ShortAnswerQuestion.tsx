import React, { useState } from 'react';

interface ShortAnswerQuestionProps {
  onNext: () => void;
}

const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({ onNext }) => {
  const [answer, setAnswer] = useState<string>('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <h2>Вопрос с коротким ответом</h2>
      {/* Форма для ввода ответа */}
      <input type="text" value={answer} onChange={handleAnswerChange} />
      <button onClick={onNext}>Далее</button>
    </div>
  );
};

export default ShortAnswerQuestion; // Добавляем экспорт по умолчанию