import React from "react";
import NewJobForm from "../../components/new.job.form";
import NewCompanyForm from "../../components/new.company.form";
import { Grid, Icon } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";
import ListAllJobs from "./list.all.jobs";
import ListAllCompanies from "./list.all.companies";
import { Link } from "react-router-dom";

const Index = (props) => {
  const { jobs, companies, addJobHandler, handleNewCompany } = props;
  return (
    <>
      <div style={{ padding: "50px 150px 30px 150px" }}>
        <div>
          <Link to="/">
            <Icon name="arrow alternate circle left outline" /> Go Back
          </Link>
        </div>

        <h1>Admin Dashboard</h1>
        <div>
          <Grid celled>
            <Grid.Column width={8}>
              <h2>Create New Company</h2>

              <NewCompanyForm handleNewCompany={handleNewCompany} />
            </Grid.Column>
            <Grid.Column width={8}>
              <h2>Create Job</h2>
              <NewJobForm addJobHandler={addJobHandler} />
            </Grid.Column>
          </Grid>
        </div>
        <h4>All Jobs</h4>
        <ListAllJobs jobs={jobs} />
        <h4>All Companies</h4>
        <ListAllCompanies id="companies-id" companies={companies} />
      </div>
      <Footer />
    </>
  );
};

export default Index;
