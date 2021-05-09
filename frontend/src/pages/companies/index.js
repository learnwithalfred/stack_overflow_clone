import React from "react";
import "./companies.styles.css";
import CompanyCard from "../../components/company.card";
import TopNavigation from "../../components/page.layout/header.nav";
import RightSideNav from "../../components/page.layout/right.nav.card";
import LeftSideCard from "../../components/page.layout/left.side.card";
import LeftSideNav from "../../components/page.layout/left.side.nav";
import { Grid } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";

const Index = (props) => {
  const renderCompanyCard = props.companies.map((company) => {
    return <CompanyCard company={company} key={company.id} />;
  });
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
            <div>{renderCompanyCard}</div>
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

export default Index;
