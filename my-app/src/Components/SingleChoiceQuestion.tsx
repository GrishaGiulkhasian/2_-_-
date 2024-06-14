import React from 'react';

interface SingleChoiceQuestionProps {
  onNext: () => void;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({ onNext }) => {
  // Логика для вопроса с одним вариантом ответа

  return (
    <div>
      <h2>Вопрос с одним вариантом ответа</h2>
      {/* Форма для варианта ответа */}
      <button onClick={onNext}>Далее</button>
    </div>
  );
};

export default SingleChoiceQuestion;
