import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";


const CardExampleExtraContent = () => (
  <>
    <Card.Content extra>
      <h5>Teams</h5>
      <p>
        {" "}
        <span style={{ fontWeight: "bolder", color:"black"}}>Stack Overflow for Teams</span> –
        Collaborate and share knowledge with a private group
      </p>
      <Image
        src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
        wrapped
        ui={false}
      />
      <Button fluid size="mini" primary>
        Create A Free Team
      </Button>

      <Link to="/">What is a team?</Link>
    </Card.Content>
  </>
);

export default CardExampleExtraContent;
