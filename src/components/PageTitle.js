import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function PageTitle({ title, description }) {
  return (
    <Jumbotron>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>
    </Jumbotron>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageTitle;
