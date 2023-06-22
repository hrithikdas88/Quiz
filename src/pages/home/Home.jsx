import React, { useContext, useState } from "react";
import "./Home.scss";
import QuesContext from "../../components/context/Context";

const Home = () => {
  const { QuesArray } = useContext(QuesContext);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const manageCrct = () => {
    setDisabled(true);
    setScore(score + 1);
  };

  const manageWrong = (opt) => {
    setDisabled(true);
    setSelectedOption(opt);
  };

  const handleOptionClick = (opt) => {
    setSelectedOption(opt);
    const isCorrect = opt == QuesArray[index].answer;
    console.log(isCorrect);
    if (isCorrect) {
      manageCrct(opt);
    } else {
      manageWrong(opt);
    }
  };

  const handleNxt = () => {
    setIndex(index + 1);
    setDisabled(false);
    setSelectedOption(null);
  };

  const renderButtons = (options) =>
    options.map((opt) => {
      const isCorrect = opt === QuesArray[index].answer;
      const isSelected = selectedOption === opt;

      let buttonClassName = "";
      if (isSelected) {
        buttonClassName = isCorrect ? "correct" : "incorrect";
        console.log(isCorrect);
      }
      console.log(
        buttonClassName,
        isCorrect,
        isSelected,
        selectedOption,
        opt,
        "check..."
      );
      return (
        <button
          key={opt}
          disabled={disabled}
          onClick={() => handleOptionClick(opt)}
          className={`answer ${buttonClassName}`}
        >
          {opt}
        </button>
      );
    });

  return (
    <div className="main">
      {index <= QuesArray.length - 1 ? (
        <div className="home">
          <div className="container">
            <h1>Who Wants to Be a Millionaire?</h1>

            {QuesArray.slice(index, index + 1).map((item) => (
              <React.Fragment>
                <h3>Que. {item.question}</h3>
                <div className="score">Score: {score}</div>

                {renderButtons(item.options)}
              </React.Fragment>
            ))}

            <button className="nxt" onClick={handleNxt}>
              Next Question
            </button>
          </div>
        </div>
      ) : (
        <div className="end-pg">
          <h1>
            Your Score: {score}/{QuesArray.length}
          </h1>
          <h3>Keep calm and try again</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
