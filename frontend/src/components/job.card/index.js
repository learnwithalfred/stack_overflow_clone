import React from 'react'

const Index = ({ id, name, jobType, role, jobDescription, createdAt }) => {
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Job Type: {jobType}</li>
        <li>Role: {role}</li>
        <li>Job Description: {jobDescription}</li>
        <li>Posteed On: {createdAt}</li>
      </ul>
    </div>
  );
};

export default Index
