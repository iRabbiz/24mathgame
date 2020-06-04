import React, { useState, useEffect, useRef } from "react";

import Layout from "../components/Layout";
import "../styles.scss";

import { Row, Col } from "react-bootstrap";
import { Card, CardContent, Button } from "@material-ui/core"

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

  const numberToggleClick = (event) => {
    let number_index = event.currentTarget.getAttribute("data-id");
    let number_card_toggle = numberToggle;
    number_card_toggle[number_index] = true;
    setNumberToggle(number_card_toggle);
  };

  const calculate = () => {
    let eval_num = eval(numberFirst + operationVal + numberSecond);

    let number_card_total = numberCard;
    if (number_card_total.length == 6) {
      if (eval_num == 24) {
        alert("You Win!");
      } else {
        alert("Game Over");
      }
      window.location.reload(false)
    }

    number_card_total.push(eval_num);
    setNumberCard(number_card_total);

    let number_card_toggle = numberToggle;
    number_card_toggle.push(false);
    setNumberToggle(number_card_toggle);

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
                <CardContent
                  className="number-card-detail"
                  onClick={numberToggleClick}
                  data-id={index}
                >
                  {item}
                </CardContent>
              </Card>
            </Col>
          );
        })}

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
