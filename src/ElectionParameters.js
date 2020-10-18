import React from "react";
import { Col } from "react-bootstrap";
import ParameterContainer from "./ParameterContainer";

function ElectionParameters(props) {
  return (
    <>
      <h1>Election Parameters</h1>
      <ParameterContainer>
        <Col>
          <label className="input-label">Candidate Seats</label>
          <input
            type="number"
            onChange={(e) => props.setSeatsOpen(e.target.value)}
            value={props.seatsOpen}
          ></input>
          <p className="input-helper-text">Max 30</p>
        </Col>
      </ParameterContainer>
    </>
  );
}

export default ElectionParameters;
