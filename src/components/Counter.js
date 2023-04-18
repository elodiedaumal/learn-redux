import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const amountcounter = 10;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: amountcounter });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT', amount: amountcounter });
  };

  const resetCounterHandler = () => {
    dispatch({ type: 'RESET' });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'SHOW' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>
              Increment by {amountcounter}
            </button>
            <button onClick={decrementHandler}>
              Decrement by {amountcounter}
            </button>
          </div>
          <div>
            <button onClick={resetCounterHandler}>Reset Counter</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>
        {show ? 'Hide Counter' : 'Show Counter'}
      </button>
    </main>
  );
};

export default Counter;
