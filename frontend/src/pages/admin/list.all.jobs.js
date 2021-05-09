import React from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import JobTable from "./job.table";

const AllJobList = (props) => {
  const renderCompanyCard = props.jobs.map((job) => {
    return <JobTable job={job} key={job.id} />;
  });
  return (
    <Table compact celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
          <Table.HeaderCell>Applicants Type</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Read More</Table.HeaderCell>
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
