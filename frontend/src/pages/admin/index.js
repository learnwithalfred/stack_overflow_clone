import React from "react";
import NewJobForm from "../../components/new.job.form";
import NewCompanyForm from "../../components/new.company.form";

function Index(props) {
  return (
    <>
      adin page here
      <NewJobForm addJobHandler={props.addJobHandler} />
      <NewCompanyForm handleNewCompany={props.handleNewCompany} />
    </>
  );
}

export default Index;
