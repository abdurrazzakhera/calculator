import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../style/Main";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");
  const appendValuesHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const allClearHandler = () => {
    setCurrent("");
    setPrevious("");
    setOperations("");
  };
  const chooseOperationsHandler = (el) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };
  const equalHandler = () => {
    let value = compute();
    if (value === undefined && value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
    }
    return result;
  };
  const deleteHandler = () => {
    setCurrent(String(current.slice(0, -1)));
  };
  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {previous} {operations}
          </Prevoius>
          <Current> {current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allClearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button data={"÷"} onClick={chooseOperationsHandler} operation>
          ÷
        </Button>
        <Button data={7} onClick={appendValuesHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValuesHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValuesHandler}>
          9
        </Button>
        <Button data={"x"} onClick={chooseOperationsHandler} operation>
          X
        </Button>
        <Button data={4} onClick={appendValuesHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValuesHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValuesHandler}>
          6
        </Button>
        <Button data={"+"} onClick={chooseOperationsHandler} operation>
          +
        </Button>
        <Button data={1} onClick={appendValuesHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValuesHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValuesHandler}>
          3
        </Button>
        <Button data={"-"} onClick={chooseOperationsHandler} operation>
          -
        </Button>
        <Button data={"."} onClick={appendValuesHandler} dot>
          .
        </Button>
        <Button data={0} onClick={appendValuesHandler}>
          0
        </Button>
        <Button gridSpan={2} onClick={equalHandler} equals>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
