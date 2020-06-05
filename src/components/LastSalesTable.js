import React from "react";
import PropTypes from "prop-types";

import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";

function LastSalesTable({ sales }) {
  const tableRows = sales.map((sale) => (
    <tr key={sale.id}>
      <td>R$</td>
      <td>{sale.amount.toFixed(2)}</td>
      <td>{sale.installments}</td>
      <td>{new Date(sale.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</td>
      <td>{sale.creditCard}</td>
    </tr>
  ));

  return (
    <Row className="text-center mt-5">
      <h1 className="full-line">Últimas Vendas</h1>
      <Table striped hover>
        <thead>
          <tr>
            <th colSpan="2">Valor</th>
            <th># Parcelas</th>
            <th>Data da Venda</th>
            <th>Cartão de Crédito</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </Row>
  );
}

LastSalesTable.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LastSalesTable;
