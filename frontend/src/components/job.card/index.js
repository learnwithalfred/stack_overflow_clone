import React from 'react'
import { Link } from "react-router-dom";

const Index = (props) => {
  const { id, name, jobType, role, jobDescription, createdAt } = props.job;
  return (
    <div>
    job card here
      <ul>
        <li>Name: {name}</li>
        <li>Job Type: {jobType}</li>
        <li>Role: {role}</li>
        <li>Job Description: {jobDescription}</li>
        <li>Posteed On: {createdAt}</li>
        <Link
          to={{ pathname: `/jobs/${id}`, state: { jobs: props.job } }}
        >
          Details{" "}
        </Link>
      </ul>
    </div>
  );
};


export default Index
