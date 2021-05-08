import React from "react";
import { withRouter } from "react-router-dom";
import TopNavigation from "../../components/page.layout/header.nav";
import RightSideNav from "../../components/page.layout/right.nav.card";
import LeftSideCard from "../../components/page.layout/left.side.card";
import DisplayJobCard from "../../components/page.layout/display.card";
import LeftSideNav from "../../components/page.layout/left.side.nav";
import { Grid } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";

const Details = (props) => {
  const {
    companyName,
    briefIntro,
    companyPicture,
    aboutCompany,
    createAt,
  } = props.location.state.companies;
  return (
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
            <div>
              <p>name{companyName}</p>
              <p>name{briefIntro}</p>
              <p>name{companyPicture}</p>
              <p>name{aboutCompany}</p>
              <img src={companyPicture} alt={companyPicture} />
              <p>name{createAt}</p>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <RightSideNav />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
};

export default withRouter(Details);
