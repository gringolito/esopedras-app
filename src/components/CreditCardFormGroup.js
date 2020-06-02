import React from "react";
import Form from "react-bootstrap/Form";

function CreditCardFormGroup({ controlId }) {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>Cartão de Crédito</Form.Label>
      <Form.Control as="select" custom>
        <option value="1">Visa</option>
        <option value="2">MasterCard</option>
        <option value="3">Elo</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CreditCardFormGroup;