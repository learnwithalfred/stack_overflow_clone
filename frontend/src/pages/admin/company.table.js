import React from "react";
import { Icon, Table } from "semantic-ui-react";
const CompanyTable = (props) => {
  const { briefIntro, companyName } = props.company;
  return (
    <>
      <Table.Row>
        <Table.Cell>{companyName}</Table.Cell>
        <Table.Cell>{briefIntro}</Table.Cell>
        <Table.Cell>
          <Icon name="hand point right outline" />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default CompanyTable;
