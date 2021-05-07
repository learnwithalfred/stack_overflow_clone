import React from 'react'
import { Link } from "react-router-dom";



const Index = (props) => {
  const {
    id,
    companyName,
    briefIntro,
    companyPicture,
    aboutCompany,
    createAt,
  } = props.company;
  return (
    <>
      <ul>
        <li>{companyName}</li>
        <li>{briefIntro}</li>
        <li>{aboutCompany}</li>
        <li>{createAt}</li>
        <img src={companyPicture} alt={companyName} />
        <Link
          to={{
            pathname: `/companies/${id}`,
            state: { companies: props.company },
          }}
        >Details </Link>
      </ul>
    </>
  );
};

export default Index
