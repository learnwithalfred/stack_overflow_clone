import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const Index = (props) => {
  const initialState = {
    name: "",
    jobType: "",
    role: "",
    jobDescription: "",
    experienceLevel:"",
  };

  const [job, SetJobs] = useState(initialState);
  const handleChange = (name) => (event) => {
    SetJobs({ ...job, [name]: event.target.value, id: Date.now });
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
            value={job.name}
            onChange={handleChange("name")}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field
            type="text"
            label="Roles"
            value={job.role}
            placeholder="Roles"
            name="role"
            onChange={handleChange("role")}
            control="select"
          >
            <option value="">--Please Select Role--</option>
            <option value="Front End Developer">Front End Developer</option>
            <option value="Back End Developer">Back End Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Other">Other</option>
          </Form.Field>

          <Form.Field
            fluid
            type="text"
            label="Job Type"
            placeholder="Job Type"
            name="jobType"
            value={job.jobType}
            onChange={handleChange("jobType")}
            control="select"
          >
            <option value="">--Please Select Job Type--</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
            <option value="Contact">Contact</option>
            <option value="Other">Other</option>
          </Form.Field>
        </Form.Group>

        <Form.Field
          fluid
          type="text"
          label="Experience Level"
          placeholder="Experience Level"
          name="experienceLevel"
          value={job.experienceLevel}
          onChange={handleChange("experienceLevel")}
          control="select"
        >
          <option value="">--Please Select Experience Level--</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Senior">Senior</option>
          <option value="Other">Other</option>
        </Form.Field>

        <Form.TextArea
          type="text"
          label="Details About JOb"
          placeholder="Job Description"
          name="jobDescription"
          value={job.jobDescription}
          style={{ minHeight: 100 }}
          onChange={handleChange("jobDescription")}
        />
        <Button fluid primary type="submit">
          Add New Job
        </Button>
      </Form>
    </>
  );
};

export default Index;
