import { useState } from 'react';

const useQuizState = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleOptionClick = (opt, item) => {
    const isCorrect = opt === item.answer;

    setState(prevState => ({
      ...prevState,
      selectedOption: opt,
      disabled: true,
      score: isCorrect ? prevState.score + 1 : prevState.score
    }));
  };

  const handleNxt = () => {
    setState(prevState => ({
      ...prevState,
      index: prevState.index + 1,
      disabled: false,
      selectedOption: null
    }));
  };

  return [state, handleOptionClick, handleNxt];
};

export default useQuizState;