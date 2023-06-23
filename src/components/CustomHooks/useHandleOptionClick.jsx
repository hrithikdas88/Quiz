import { useContext } from "react";
import QuesContext from "../../components/context/Context";

export const useHandleOptionClick = () => {
  const { state, setState } = useContext(QuesContext);

  const handleOptionClick = (opt, item) => {
    const isCorrect = opt === item.answer;

    setState((prevState) => ({
      ...prevState,
      selectedOption: opt,
      disabled: true,
      score: isCorrect ? prevState.score + 1 : prevState.score,
    }));
  };

  return {
    handleOptionClick,
  };
};
