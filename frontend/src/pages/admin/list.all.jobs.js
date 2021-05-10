import React from "react";
import { Table } from "semantic-ui-react";
import JobTable from "./job.table";
import LoadingData from "../../components/loading";

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
          <Table.HeaderCell>Experience</Table.HeaderCell>

          <Table.HeaderCell>Read More</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {renderCompanyCard.length > 0 ? renderCompanyCard : <LoadingData />}
      </Table.Body>
    </Table>
  );
};
export default AllJobList;
