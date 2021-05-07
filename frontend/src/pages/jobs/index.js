import React from "react";
import "./jobs.styles.css";
import JobCard from "../../components/job.card";

const Index = (props) => {
  //console.log(props);
  const renderJobList = props.jobs.map(({ id, ...rest }) => {
    return <JobCard {...rest} key={id} />;
  });

  return (
    <>
      <div>{renderJobList}</div>
    </>
  );
};

export default Index;
