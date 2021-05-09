import React, { useState } from "react";
import { Button, TextArea, Form } from "semantic-ui-react";

const Index = (props) => {
  let initialState = {
    companyName: "",
    briefIntro: "",
    aboutCompany: "",
    companyPicture: "",
  };

  const [company, SetCompany] = useState(initialState);

  const handleChange = (name) => (event) => {
    SetCompany({ ...company, [name]: event.target.value, id: Date.now });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewCompany(company);
    SetCompany(initialState);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Company Name</label>
          <input
            required
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange("companyName")}
          />
        </Form.Field>

        <Form.Field>
          <label>Brief Intro About Company</label>
          <input
            required
            type="text"
            name="briefIntro"
            onChange={handleChange("briefIntro")}
            placeholder="Brief Intro About Company"
          />
        </Form.Field>

        <Form.Field>
          <label>Company Picture URL</label>
          <input
            required
            type="text"
            name="companyPicture"
            onChange={handleChange("companyPicture")}
            placeholder="image url"
          />
        </Form.Field>

        <Form.Field>
          <label>Company Details</label>
          <TextArea
            type="text"
            name="aboutCompany"
            onChange={handleChange("aboutCompany")}
            placeholder="Tell Us a lot about your company"
            style={{ minHeight: 100 }}
          />
        </Form.Field>
        {/* <input type="submit" value="create company" /> */}
        <Button fluid primary type="submit">
          Add New Company
        </Button>
      </Form>
    </>
  );
};

export default Index;
