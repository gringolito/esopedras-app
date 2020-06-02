import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";

function LastSalesTable({ sales }) {
  const tableRows = sales.map((sale, index) => {
    return (
      <tr key={index}>
        <td>R$</td>
        <td>{sale.amount.toFixed(2)}</td>
        <td>{sale.installments}</td>
        <td>{new Date(sale.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</td>
        <td>{sale.creditCard}</td>
      </tr>
    );
  });

  return (
    <Row className="text-center mt-5">
      <h1 className="full-line">Últimas Vendas</h1>
      <Table striped hover>
        <thead>
          <tr>
            <th colspan="2">Valor</th>
            <th># Parcelas</th>
            <th>Data</th>
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

export default LastSalesTable;