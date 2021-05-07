import React from 'react'
import { withRouter } from "react-router-dom";
const Details =(props) =>{
//console.log(props)
    const {
      companyName,
      briefIntro,
      companyPicture,
      aboutCompany,
      createAt,
    } = props.location.state.companies;
    return (
      <>
        <p>name{companyName}</p>
        <p>name{briefIntro}</p>
        <p>name{companyPicture}</p>
        <p>name{aboutCompany}</p>
        <img src={companyPicture} alt={companyPicture} />
        <p>name{createAt}</p>
      </>
    );
}

export default withRouter(Details);
