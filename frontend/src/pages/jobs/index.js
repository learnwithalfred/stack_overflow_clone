import React from "react";
import "./jobs.styles.css";
import JobCard from "../../components/job.card";
import TopNavigation from "../../components/page.layout/header.nav";
import RightSideNav from "../../components/page.layout/right.nav.card";
import LeftSideCard from "../../components/page.layout/left.side.card";
import DisplayJobCard from "../../components/page.layout/display.card";
import LeftSideNav from "../../components/page.layout/left.side.nav";
import { Grid} from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";



const Index = (props) => {
  const renderJobList = props.jobs.map((job) => {
    return <JobCard job={job} key={job.id} />;
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
            <DisplayJobCard />
            <div>{renderJobList}</div>
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


