import { useContext, React, useState ,} from "react";
import "./Home.scss";
import QuesContext from "../../components/context/Context";

const Home = () => {
  const { QuesArray } = useContext(QuesContext);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered]= useState(false)
  const [disabled, setDisabled] = useState(false);



  const manageCrct = () => {
    //setScore(score + 1);

    
     setDisabled(true)
    //alert("Correct answer proceed to next question");
     //setIndex(index+1)
    //setIsAnswered(!isAnswered)
   
  };
  const manageWrong = () => {
    setScore(score);
    //setIndex(index+1)
     //setCheckbt(false);
    setDisabled(true);
    // alert("Wrong answer proceed to next question")
   //setIsAnswered(!isAnswered)
   
  };

  const handleNxt = () => {
    setIndex(index + 1);
    setDisabled(false);
   
  };



  return (
    <div className="main">
      {index <= QuesArray.length - 1 ? (
        <div className="home">
          <div className="container">
            <h1>Who Wants to Be a Millionaire?</h1>

            <span>
              {QuesArray.map((item) => (
                <>
                  <h3>Que. {item.question}</h3>
                  <div className="score">Score: {score}</div>

                  {item.options.map((opt) => {
                    return (
                      <>
                      {opt == item.answer ?
                        (
                          <>
                          <button
                          // disabled={disabled}
                          onClick={()=>manageCrct()}
                          className="answer correct"
                          >
                          {opt}
                          </button>
                          </>
                        ):(
                          <>
                          <button
                        
                          onClick={()=>manageWrong()}
                          disabled={disabled}
                          className="answer incorrect"
                          >{opt}</button>
                          
                          </>
                        )
                        }
                        </>
                      // <button
                      //   disabled={disabled}
                      //   onClick={
                      //     opt == item.answer
                      //       ? () => {
                      //           manageCrct();
                      //         }
                      //       : () => {
                      //           manageWrong();
                      //         }
                      //   }
                      //   className={isAnswered?"answer correct":"answer incorrect"}
                        
                          
                        
                      // >
                      //   {opt}
                      // </button>
                    );
                  })}
                </>
              )).slice(index, index + 1)}
            </span>

            {/* <button className="nxt" onClick={()=>setIndex(index-1)}>Prev Question</button>     */}
            <button className="nxt" onClick={() => handleNxt()}>
              Next Question
            </button>
          </div>
        </div>
      ) : (
        <div className="end-pg">
          <h1>
            {" "}
            YourScore: {score}/{QuesArray.length}
          </h1>
          <h3>Keep calm and try again</h3>
        </div>
      )}
    </div>
  );
};

export default Home;