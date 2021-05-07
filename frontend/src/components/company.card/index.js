import React from 'react'

const Index = ({ companyName, briefIntro, companyPicture, aboutCompany, createAt }) => {
  return (
    <>
      <ul>
        <li>{companyName}</li>
        <li>{briefIntro}</li>
        <li>{aboutCompany}</li>
        <li>{createAt}</li>
        <img src={companyPicture} alt={companyName} />
      </ul>
    </>
  );
};

export default Index
