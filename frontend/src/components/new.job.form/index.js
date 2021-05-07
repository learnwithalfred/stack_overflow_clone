import React, { useState } from "react";

const Index = (props) => {
  const initialState = {
    name: "",
    jobType: "",
    role: "",
    jobDescription: "",
  };

  const [job, SetJobs] = useState(initialState);
  const handleChange = (name) => (event) => {
    SetJobs({ ...job, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addJobHandler(job);
    SetJobs(initialState);
    console.log("lj;khj;hjjh  nbv", props);
//    props.history.push("/")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job name"
          name="name"
          onChange={handleChange("name")}
        />
        <input
          type="text"
          placeholder="jobType"
          name="jobType"
          onChange={handleChange("jobType")}
        />

        <input
          type="text"
          placeholder="role"
          name="role"
          onChange={handleChange("role")}
        />
        <input type="text" placeholder="jobDescription" name="jobDescription" />
        <input type="submit" value="Submit form" />
      </form>
    </>
  );
};

export default Index;
