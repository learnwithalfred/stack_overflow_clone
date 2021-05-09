import React from "react";
import { Grid, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./page.layout.styles.css";

function RightSideNav() {
  return (
    <Grid.Row>
      <Grid.Column width={3}>
        <Menu pointing secondary vertical color="red">
          <Menu.Item as="a">
            {" "}
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>Find A Job</Menu.Item>

          <Menu.Item floated="left" as="a">
            <Link to="/jobs">Jobs</Link>
          </Menu.Item>
          <Menu.Item as="a">
            {" "}
            <Link to="/companies">Companies</Link>
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
      </Grid.Column>


      
    </Grid.Row>
  );
}

export default RightSideNav;
