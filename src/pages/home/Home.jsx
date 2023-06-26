import React, { useContext, useState } from "react";
import "./Home.scss";
import QuesContext from "../../components/context/Context";
import useQuizState from "../../components/CustomHooks/useQuizState";
import { Modal, Button } from "react-bootstrap";

const Home = () => {
  const { QuesArray } = useContext(QuesContext);
  const [state, handleOptionClick, handleNxt, setState] = useQuizState({
    index: 0,
    score: 0,
    disabled: false,
    selectedOption: null,
  });
  const [showReward, setShowReward] = useState(false);

  const handleNextQuestion = () => {
    handleNxt();

    if (state.index === 4) {
      setShowReward(true);
    }
  };

  const handleCloseReward = () => {
    
    setShowReward(false);
    setState((prevState) => ({
      ...prevState,
      score: prevState.score + 5,
    }));
  };
  


  const renderRewardStatement = () => {
    if (showReward) {
      return (
        <Modal 
          show={showReward}
          onHide={handleCloseReward}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="d-flex justify-content-center">
            <Modal.Title>Congratulations!!! You are halfway</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
          Total Score: {state.score}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
       
         <Button onClick={handleCloseReward} >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3209/3209955.png"
                alt=""
                style={{ width: "48px", height: "48px" }}
               
              /> Claim reward of Five points
            </Button>
           
          </Modal.Footer>
        </Modal>
      );
    }
    return null;
  };

  const renderButtons = (item) =>
    item.options.map((opt) => {
      const isCorrect = opt === item.answer;
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
      <div className="home">
        <div className="container">
          <h1>Jeopardy! </h1>
          {renderRewardStatement()}

          {state.index <= QuesArray.length - 1 ? (
            <>
              <h3>Que. {QuesArray[state.index].question}</h3>
              <div className="score">Current Score: {state.score}</div>
              {renderButtons(QuesArray[state.index])}

              <button className="nxt" onClick={handleNextQuestion}>
                Next Question
              </button>
            </>
          ) : (
            <div className="end-pg">
              <h1>
                Your Score: {state.score}/{QuesArray.length + 5}
              </h1>
              <h3>Keep calm and try again</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
