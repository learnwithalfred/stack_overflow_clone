import React from "react";
import { Table } from "semantic-ui-react";
import CompanyTable from "./company.table";
import LoadingData from "../../components/loading";

const AllJobList = (props) => {
  //console.log("my propas", props)

  const renderCompanyCard = props.companies.map((company) => {
    return <CompanyTable company={company} key={company.id} />;
  });

  return (
    <Table compact celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
          <Table.HeaderCell>About</Table.HeaderCell>

          <Table.HeaderCell>More</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {renderCompanyCard.length > 0 ? renderCompanyCard : <LoadingData />}
      </Table.Body>
    </Table>
  );
};
export default AllJobList;
