import React from "react";
import { Grid, Image, Menu } from "semantic-ui-react";
import Footer from "./footer";
import TopNavigation from "./header.nav";
import RightSideNav from "./right.nav.card";
import LeftSideCard from "./left.side.card";
import DisplayJobCard from "./display.card";

const GridExampleCelled = () => (
  <>
    <TopNavigation />
    <Grid celled>
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

      <Grid.Row>
        <Grid.Column width={3}>
          <LeftSideCard />
        </Grid.Column>
        <Grid.Column width={8}>
          <DisplayJobCard />
        </Grid.Column>
        <Grid.Column width={5}>
          <RightSideNav />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer />
  </>
);

export default GridExampleCelled;
