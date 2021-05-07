import React from "react";
import { withRouter } from "react-router-dom";
const Details =(props) =>{
  //console.log(props);
  const { name, jobType, role, jobDescription, createdAt } = props.location.state.jobs;
//console.log(props)
  return (
    <>
      details page here
      <p>name{name}</p>
      <p>jobType{jobType}</p>
      <p>role{role}</p>
      <p>jobDescription{jobDescription}</p>
      <p>createdAt{createdAt}</p>
    </>
  );
}

export default withRouter(Details);
