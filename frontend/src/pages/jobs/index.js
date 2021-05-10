import React from "react";
import "./jobs.styles.css";
import JobCard from "../../components/job.card";
import TopNavigation from "../../components/page.layout/header.nav";
import LeftSideCard from "../../components/page.layout/left.side.card";
import LeftSideNav from "../../components/page.layout/left.side.nav";
import { Grid } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";
import CompanyDetailsCArd from "../../components/company.card/company.side.mini.card";
import SeacrchJob from "../../components/search/job.search";
import LoadingData from "../../components/loading";

const Index = (props) => {
  const renderJobList = props.jobs.map((job) => {
    return <JobCard job={job} key={job.id} />;
  });

  const searchResults = props.jobs.filter((results) => {
    return <SeacrchJob results={results} />;
  });

  return (
    <>
      <TopNavigation />
      <Grid padded>
        <LeftSideNav />
        <Grid.Row>
          <Grid.Column width={3}>
            <LeftSideCard />
          </Grid.Column>
          <Grid.Column width={6}>
            <div>
              {renderJobList.length > 0 ? renderJobList : <LoadingData />}
            </div>
          </Grid.Column>
          <Grid.Column width={7}>
            <CompanyDetailsCArd />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
};

export default Index;
