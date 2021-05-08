import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";


const CardExampleExtraContent = () => (
  <Card>
    <Card.Content header="About Amy" />
    <Card.Content description="Stack Overflow for Teams – Collaborate and share knowledge with a private group." />
    <Card.Content extra>
      <Image
        src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
        wrapped
        ui={false}
      />
      <Button fluid size="mini" primary>Create A Free Team</Button>

      <Link to="/">What is a team</Link>
    </Card.Content>
  </Card>
);

export default CardExampleExtraContent;
