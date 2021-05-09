import React from "react";
import NewJobForm from "../../components/new.job.form";
import NewCompanyForm from "../../components/new.company.form";
import TopNavigation from "../../components/page.layout/header.nav";
import RightSideNav from "../../components/page.layout/right.nav.card";
import { Grid } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";
import ListAllJobs from "./list.all.jobs";
import ListAllCompanies from "./list.all.companies";

const Index = (props) => {
  const { jobs, companies, addJobHandler, handleNewCompany } = props;
  return (
    <>
      <TopNavigation />
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={12}>
            <div>
              <h1>Admin Dashboard</h1>
              <ListAllJobs jobs={jobs} />
              <ListAllCompanies companies={companies} />
              <NewJobForm addJobHandler={addJobHandler} />
              <NewCompanyForm handleNewCompany={handleNewCompany} />
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
};

export default Index;
