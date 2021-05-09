import React from "react";
import NewJobForm from "../../components/new.job.form";
import NewCompanyForm from "../../components/new.company.form";
import TopNavigation from "../../components/page.layout/header.nav";
import RightSideNav from "../../components/page.layout/right.nav.card";
import LeftSideCard from "../../components/page.layout/left.side.card";
import LeftSideNav from "../../components/page.layout/left.side.nav";
import { Container, Grid } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";


function Index(props) {
  return (
    <>
      <TopNavigation />
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={8}>
            <div>
              <h1>Admin Dashboard</h1>

              <NewJobForm addJobHandler={props.addJobHandler} />
              <NewCompanyForm handleNewCompany={props.handleNewCompany} />
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <RightSideNav />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
}

export default Index;
