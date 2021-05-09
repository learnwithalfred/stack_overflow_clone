import React from "react";
import { Button, Card } from "semantic-ui-react";
import "./page.layout.styles.css";
import { Link } from "react-router-dom";

const CardExampleExtraContent = () => (
  <Card centered fluid>
    <div className="center-card">
      <h3>Are you looking for a job?</h3>
      <center className="styled-paragraph">
        When you create a Developer Story, we’ll accelerate your matches and get
        you in front of employers ASAP.
      </center>

      <Button size="masive" basic color="blue">
        <Link to="/admin">Create a Developer Story</Link>
      </Button>
    </div>
  </Card>
);

export default CardExampleExtraContent;
