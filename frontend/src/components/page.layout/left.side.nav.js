import React from 'react'
import { Grid, Image, Menu } from "semantic-ui-react";
function RightSideNav() {
    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Menu text vertical>
            <Menu.Item as="a">Home</Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    );
}

export default RightSideNav
