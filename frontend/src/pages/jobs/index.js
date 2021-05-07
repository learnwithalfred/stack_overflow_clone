import React from "react";
import "./jobs.styles.css";
import JobCard from "../../components/job.card";


const Index = (props) => {
  //console.log("testedite awekfndsjkhfejhifw", props);
  const renderJobList = props.jobs.map((job) => {
    return <JobCard job={job} key={job.id} />;
  });

  return (
    <>
    job list component
      <div>{renderJobList}</div>
    </>
  );
};

export default Index;


