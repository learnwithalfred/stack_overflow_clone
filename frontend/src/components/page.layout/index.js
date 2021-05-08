import React from "react";
import { Grid} from "semantic-ui-react";
import Footer from "./footer";
import TopNavigation from "./header.nav";
import RightSideNav from "./right.nav.card";
import LeftSideCard from "./left.side.card";
import DisplayJobCard from "./display.card";
import LeftSideNav from "./left.side.nav";


const LayoutTemplate = () => (
  <>
    <TopNavigation />
    <Grid celled>
     <LeftSideNav />
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

export default LayoutTemplate;
