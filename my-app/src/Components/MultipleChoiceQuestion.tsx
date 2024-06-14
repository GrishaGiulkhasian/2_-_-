import React, { useState } from 'react';

interface MultipleChoiceQuestionProps {
  onNext: () => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ onNext }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h2>Вопрос с несколькими вариантами ответа</h2>
      {/* Форма для выбора вариантов ответа */}
      <label>
        <input type="checkbox" value="Option 1" checked={selectedOptions.includes("Option 1")} onChange={() => handleOptionSelect("Option 1")} />
        Option 1
      </label>
      <label>
        <input type="checkbox" value="Option 2" checked={selectedOptions.includes("Option 2")} onChange={() => handleOptionSelect("Option 2")} />
        Option 2
      </label>
      <button onClick={onNext}>Далее</button>
    </div>
  );
};

export default MultipleChoiceQuestion;
