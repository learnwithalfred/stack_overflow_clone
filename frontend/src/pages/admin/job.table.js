import React from "react";
import { Icon, Table } from "semantic-ui-react";
const CompanyTable = (props) => {
  console.log(
    "job job osdafjhfaguifdlhahjdhsahdjlahdjhfl table props",
    props.job
  );

  const { name, role, experienceLevel } = props.job;
  return (
    <>
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{experienceLevel}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
        <Table.Cell>
          <Icon name="hand point right outline" />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default CompanyTable;
