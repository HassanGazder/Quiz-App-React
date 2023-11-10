import { useContext, useState } from "react";
import "./App.css";
import "./index.css";
import { Quizcontext } from "./Quizcontext";
function App() {
  let [index, setindex] = useState(0);
  let [score, setscore] = useState(0);
  let [answer, setanswer] = useState("");
  let AllQuizes = useContext(Quizcontext);


  function showquiz() {
    console.log("index", index);
    setanswer("");
    console.log("json data", AllQuizes[index].answer);
    console.log("input answer", answer);

    if (AllQuizes[index].answer === answer) {
      setscore((score += 2));
      console.log("correct answer");
      console.log("updated score", score);
    } else {
      console.log("wrong answer");
    }
    if (answer === "") {
      alert("plz select one option");
    } else {
      setindex(++index)
    }
  }

  return (
    <div className="App">
      {index === 4 ? (
        <h1>
          Your Score <br /> {score}
        </h1>
      ) : (
        <form>
          <h1>{AllQuizes[index].question}</h1>
          {AllQuizes[index].options.map((items, ind) => {
            return (
              <label key={ind}>
                <br />
                <input
                  onChange={(ev) => setanswer(ev.target.value)}
                  type="radio"
                  name="myradio"
                  value={items}
                  checked={answer === items ? true : false}
                />
                {items}
              </label>
            );
          })}
        </form>
      )}

      <div className="button-div">
        {index === 5 ? (
          <button
            className="btn btn-success"
            style={{ display: "none" }}
            onClick={showquiz}
          >
            Next
          </button>
        ) : (
          <button
            className="btn btn-success"
            style={{ display: "block" }}
            onClick={showquiz}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
export default App;
