import {useState} from "react";
import "./Counter.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

const plusSign = <FontAwesomeIcon icon={faPlus} />;
const minusSign = <FontAwesomeIcon icon={faMinus} />;

const Counter = () => {
  const initialTickets = Math.floor(Math.random() * 30);
  const [count, setCount] = useState(initialTickets);

  const decrementCount = () => {
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1);
    } else {
      return;
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter">
      <h4 className="counter__header">Tickets Completed</h4>
      <div className="counter__button-div">
        <button onClick={decrementCount} className="counter__button-div--btn">
          {minusSign}
        </button>
        <div className="counter__count">{count}</div>

        <button onClick={incrementCount} className="counter__button-div--btn">
          {plusSign}
        </button>
      </div>
    </div>
  );
};

export default Counter;
