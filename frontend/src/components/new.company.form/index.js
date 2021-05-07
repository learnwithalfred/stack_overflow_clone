import React, { useState } from "react";

const Index =(props)=> {
  const initialState = {
    companyName: "",
    briefIntro: "",
    aboutCompany: "",
    companyPicture: ""
  };

  const [company, SetCompany] = useState(initialState);

  const handleChange = (name) => (event) => {
    SetCompany({ ...company, [name]: event.target.value, id: Date.now });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewCompany(company);
    SetCompany(initialState);
    props.history.push("/");
  };


    return (
      <>
        create new company page
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="companyName"
            onChange={handleChange("companyName")}
          />
          <input
            type="text"
            name="briefIntro"
            onChange={handleChange("briefIntro")}
            placeholder="briefIntro"
          />
          <input
            type="text"
            name="companyPicture"
            onChange={handleChange("companyPicture")}
            placeholder="companyPicture"
          />
          <input
            type="text"
            name="aboutCompany"
            onChange={handleChange("aboutCompany")}
            placeholder="aboutCompany"
          />
          <input type="submit" value="create company" />
        </form>
      </>
    );
}

export default Index
