import React from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

function CreditCardFormGroup({ controlId }) {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>Cartão de Crédito</Form.Label>
      <Form.Control as="select" custom defaultValue="" required>
        <option value="" disabled>Selecione uma opção...</option>
        <option value="1">Visa</option>
        <option value="2">MasterCard</option>
        <option value="3">Elo</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Selecione uma opção válida.
      </Form.Control.Feedback>
    </Form.Group>
  );
}

CreditCardFormGroup.propTypes = {
  controlId: PropTypes.string.isRequired,
};

export default CreditCardFormGroup;
