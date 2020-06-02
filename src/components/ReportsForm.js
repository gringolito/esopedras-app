import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import CreditCardFormGroup from "./CreditCardFormGroup";
import useFormObject from "../hooks/useFormObject";

function ReportsForm({ onSubmit }) {
  const [formRef, validated, handleFormSubmit] = useFormObject();

  const getReport = () => {
    console.log("ReportsForm.getReport")
    return {
      month: document.getElementById("ReportsForm.Month").value,
      creditCard: document.getElementById("ReportsForm.CreditCard").value,
    };
  }

  const submitCallback = () => onSubmit(getReport());

  return (
    <Form noValidate validated={validated} ref={formRef}>
      <Form.Row>
        <Col>
          <CreditCardFormGroup controlId="ReportsForm.CreditCard" />
        </Col>
        <Col>
          <Form.Group controlId="ReportsForm.Month">
            <Form.Label>Mês / Ano</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                required
                aria-label="Data"
                type="month"
              />
              <Form.Control.Feedback type="invalid">
                Escolha um mês/ano.
            </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Form.Row>
      <Button
        block
        type="button"
        onClick={() => handleFormSubmit(submitCallback)}
      >Gerar Relatório</Button>
    </Form>
  );
}

export default ReportsForm;