import React, { useContext, useState } from "react";
import "./Home.scss";
import QuesContext from "../../components/context/Context";

const Home = () => {
  const { QuesArray,index, setIndex,score, setScore,disabled, setDisabled,selectedOption, setSelectedOption } = useContext(QuesContext);

  const handleOptionClick = (opt,item) => {
    setSelectedOption(opt);
    const isCorrect = opt === item.answer;
    setDisabled(true);
  
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  

  const handleNxt = () => {
    setIndex((prevIndex) => prevIndex + 1);
    setDisabled(false);
    setSelectedOption(null);
  };

  const renderButtons = (item) =>
   item.options.map((opt) => {
      const isCorrect = opt === item.answer;
      const isSelected = selectedOption === opt;

      return (
        <button
          key={opt}
          disabled={disabled}
          onClick={() => handleOptionClick(opt,item)}
          
          className={isSelected
          ? (isCorrect
            ? "answer correct"
            : "answer incorrect")
          : ("answer")}
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
              <>
                
                <h3>Que. {item.question}</h3>
                <div className="score">Score: {score}</div>
                {renderButtons(item)}
              </>
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
