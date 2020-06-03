import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import "../styles.scss";

import { Row, Col } from "react-bootstrap";
import { Card, CardContent, Button } from "@material-ui/core";

export default () => {
  const [numberCard, setNumberCard] = useState([0, 0, 0, 0]);

  const [numberFirst, setNumberFirst] = useState(null);
  const [numberSecond, setNumberSecond] = useState(null);
  const [operationVal, setOperationVal] = useState(null);

  const [numberToggle, setNumberToggle] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setNumberCard([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ]);
  }, []);

  const numberClick = (event) => {
    if (numberFirst == null) {
      setNumberFirst(event.currentTarget.getAttribute("data-number"));
    } else if (numberFirst != null) {
      setNumberSecond(event.currentTarget.getAttribute("data-number"));
    }
  };

  const operationClick = (event) => {
    if (operationVal == null) {
      setOperationVal(event.currentTarget.textContent);
    } else {
      setOperationVal(null);
    }
  };

  const calculate = () => {
    let eval_num = eval(numberFirst + operationVal + numberSecond);
    alert(eval_num);

    let number_card_total = numberCard;
    number_card_total.push(eval_num);
    setNumberCard(number_card_total);

    setNumberFirst(null);
    setNumberSecond(null);
    setOperationVal(null);
  };

  return (
    <Layout>
      <Row className="text-center mt-5">
        {numberCard.map((item, index) => {
          return (
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
              <Card
                className={`mb-3 number-card ${
                  numberToggle[index] ? "hide" : ""
                }`}
                onClick={numberClick}
                key={index}
                data-number={item}
                data-id={index}
              >
                <CardContent className="number-card-detail" onClick={() => setNumberToggle[index](!numberToggle[index])}>{item}</CardContent>
              </Card>
            </Col>
          );
        })}

        {/* <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
          <Card
            className={`mb-3 number-card ${numberToggle[1] ? "hide" : ""}`}
            onClick={() => setNumberToggle[1](!numberToggle[1])}
          >
            <CardContent className="number-card-detail" onClick={numberClick}>
              {numberCard2Elm}
            </CardContent>
          </Card>
        </Col> */}

        <Col xs={{ span: 10, offset: 1 }}>
          <Button variant="contained" className="mr-2" onClick={operationClick}>
            +
          </Button>
          <Button variant="contained" className="mr-2" onClick={operationClick}>
            -
          </Button>
          <Button variant="contained" className="mr-2" onClick={operationClick}>
            *
          </Button>
          <Button variant="contained" onClick={operationClick}>
            /
          </Button>
        </Col>

        <Col xs={{ span: 10, offset: 1 }} className="mt-2">
          <Button variant="contained" onClick={calculate}>
            Calculate
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};
