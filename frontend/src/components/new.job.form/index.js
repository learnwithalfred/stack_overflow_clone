import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const options = [
  { key: "fullTime", text: "Full Time", value: "fullTime" },
  { key: "partTime", text: "Part Time", value: "partTime" },
  { key: "contract", text: "Contract", value: "contract" },
];


const roles = [
  { key: "front end", text: "Front End", value: "front end" },
  { key: "back end", text: "Back End", value: "back end" },
  { key: "full stack", text: "Full Stack", value: "full stack" },
  { key: "Other", text: "Other", value: "Other" },
];



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

  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name of Job</label>
          <input
            type="text"
            placeholder="Job name"
            name="name"
            onChange={handleChange("name")}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Roles"
            options={roles}
            placeholder="Roles"
            name="role"
            onChange={handleChange("role")}
          />

          <Form.Select
            fluid
            label="Job Type"
            options={options}
            placeholder="Job Type"
            name="jobType"
            onChange={handleChange("jobType")}
          />
        </Form.Group>
        <Form.TextArea
          label="Details About JOb"
          placeholder="Job Description"
          name="jobDescription"
        />
          <Button fluid primary type="submit">Add New Job</Button>
      </Form>
    </>
  );
};

export default Index;
