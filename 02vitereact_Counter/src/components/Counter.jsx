function Counter() {
  //Counter project
  const [counter, setCounter] = useState(15);
  const addvalue = () => {
    if (counter == 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const minusvalue = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };


  return (
    <>
      <h1>
        <b>Counter Project</b>
      </h1>
      Counter value :{counter}
      <button className="" onClick={addvalue}>
        + {counter}
      </button>
      <button onClick={minusvalue}>- {counter}</button>
      <footer>{counter}</footer>
    </>
  );
}

export default Counter;
