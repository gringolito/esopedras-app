import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../components/PageTitle";
import SalesForm from "../components/SalesForm";
import LastSalesTable from "../components/LastSalesTable";

function Sales() {
  const [sales, setSales] = useState([]);

  const handleSubmitSale = (sale) => {
    const request = {
      method: 'POST',
      cache: 'default',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sale_amount: sale.amount,
        num_payments: sale.installments,
        date: sale.date,
        credit_card_network_id: sale.creditCard,
      }),
    };
    fetch('http://localhost:10101/api/v1/orders/', request)
      .then(response => response.json())
      .then(body => {
        console.log(body);
        const sale = {
          amount: body.sale_amount,
          installments: body.num_payments,
          date: body.date,
          creditCard: body.credit_card_network.network
        }
        setSales(prevSales => [...prevSales, sale]);
        console.log(sale);
        console.log(sales);
      });
  }

  return (
    <div>
      <PageTitle
        title="Cadastro de Vendas"
        description="Cadastro de vendas realizadas no Cartão de Crédito."
      />
      <Container>
        <SalesForm onSubmit={handleSubmitSale} />
        {!!sales.length && <LastSalesTable sales={[...sales]} />}
      </Container>
    </div>
  );
}

export default Sales;