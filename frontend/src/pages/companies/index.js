import React from "react";
import "./companies.styles.css";
import CompanyCard from "../../components/company.card";

const Index = (props) => {
  const renderCompanyCard = props.company.map(({ id, ...rest }) => {
    return <CompanyCard {...rest} key={id} />;
  });
  return (
    <>
      companies page here
      {renderCompanyCard}
    </>
  );
};

export default Index;
