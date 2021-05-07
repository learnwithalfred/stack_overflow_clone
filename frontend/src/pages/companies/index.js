import React from "react";
import "./companies.styles.css";
import CompanyCard from "../../components/company.card";

const Index = (props) => {
  const renderCompanyCard = props.companies.map((company) => {
    return <CompanyCard company={company} key={company.id} />;
  });
  return (
    <>
      companies page here
      {renderCompanyCard}
    </>
  );
};

export default Index;
