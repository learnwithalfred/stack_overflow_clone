import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import CompanyTable from "./company.table";
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

      <Table.Body>{renderCompanyCard}</Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
            >
              <Icon name="user" /> Add User
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
export default AllJobList;
