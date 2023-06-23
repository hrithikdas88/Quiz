import React, { useContext, useState } from "react";
import "./Home.scss";
import QuesContext from "../../components/context/Context";
import { useHandleOptionClick } from "../../components/CustomHooks/useHandleOptionClick";
import { useHandleNxt } from "../../components/CustomHooks/useHanleNxt";

const Home = () => {
  const { QuesArray, state } = useContext(QuesContext);
  const { handleOptionClick } = useHandleOptionClick();
  const { handleNxt } = useHandleNxt();

  const renderButtons = (item) =>
    item.options.map((opt, isCorrect) => {
      const isSelected = state.selectedOption === opt;

      return (
        <button
          key={opt}
          disabled={state.disabled}
          onClick={() => handleOptionClick(opt, item)}
          className={
            isSelected
              ? isCorrect
                ? "answer correct"
                : "answer incorrect"
              : "answer"
          }
        >
          {opt}
        </button>
      );
    });

  return (
    <div className="main">
      {state.index <= QuesArray.length - 1 ? (
        <div className="home">
          <div className="container">
            <h1>Who Wants to Be a Millionaire?</h1>

            {QuesArray.slice(state.index, state.index + 1).map((item) => (
              <>
                <h3>Que. {item.question}</h3>
                <div className="score">Score: {state.score}</div>
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
            Your Score: {state.score}/{QuesArray.length}
          </h1>
          <h3>Keep calm and try again</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
