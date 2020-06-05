import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../components/PageTitle";
import ReportsForm from "../components/ReportsForm";

function Reports() {
  const [reports, setReport] = useState(null);

  const handleSubmitReport = (report) => {
    const request = {
      method: "GET",
      cache: "default",
      mode: "cors",
    };
    fetch(`http://localhost:10101/api/v1/report-payments/${report.month}`, request)
      .then(response => response.json())
      .then(body => {
        setReport(body);
      });
  };

  return (
    <div>
      <PageTitle
        title="Relatórios de Pagamentos"
        description="Geração de relatórios com os pagamentos realizados pelas administradoras de cartões de crédito."
      />
      <Container>
        <ReportsForm onSubmit={handleSubmitReport} />
      </Container>
      {!!reports && ""}
    </div>
  );
}

export default Reports;
