import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import CreditCardFormGroup from "./CreditCardFormGroup";
import useFormObject from "../hooks/useFormObject";

function SalesForm({ onSubmit }) {
  const [formRef, validated, handleFormSubmit] = useFormObject();

  const getSale = () => ({
    amount: document.getElementById("SalesForm.Amount").value,
    installments: document.getElementById("SalesForm.Installments").value,
    date: document.getElementById("SalesForm.Date").value,
    creditCard: document.getElementById("SalesForm.CreditCard").value,
  });

  const submitCallback = () => onSubmit(getSale());

  return (
    <Form noValidate validated={validated} ref={formRef}>
      <Form.Row>
        <Col>
          <Form.Group controlId="SalesForm.Amount">
            <Form.Label>Valor</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>R$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                placeholder="0,00"
                aria-label="Valor"
                type="number"
                step="0.01"
                min="0.00"
                name="amount"
              />
              <Form.Control.Feedback type="invalid">
                Insira um valor válido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="SalesForm.Installments">
            <Form.Label>Parcelas</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                required
                placeholder="# parcelas"
                aria-label="Parcelas"
                type="number"
                min="1"
                name="installments"
              />
              <Form.Control.Feedback type="invalid">
                Insira o número de parcelas.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="SalesForm.Date">
            <Form.Label>Data da Venda</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                required
                aria-label="Data"
                type="date"
                max={new Date().toISOString().split("T")[0]}
                defaultValue={new Date().toISOString().split("T")[0]}
                name="date"
              />
              <Form.Control.Feedback type="invalid">
                Insira uma data válida para a venda.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <CreditCardFormGroup controlId="SalesForm.CreditCard" />
        </Col>
      </Form.Row>
      <Button
        block
        type="button"
        onClick={() => handleFormSubmit(submitCallback)}
      >
        Adicionar Venda
      </Button>
    </Form>
  );
}

SalesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SalesForm;
