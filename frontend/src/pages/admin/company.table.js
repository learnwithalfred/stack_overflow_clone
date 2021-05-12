import React from "react";
import { Link } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";
const CompanyTable = (props) => {
  const { id, briefIntro, companyName } = props.company;
  return (
    <>
      <Table.Row>
        <Table.Cell>{companyName}</Table.Cell>
        <Table.Cell>{briefIntro.slice(0, 50)}...</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: `/companies/${id}`,
              state: { companies: props.company },
            }}
          >
            <Icon size="large" name="hand point right outline" />
          </Link>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default CompanyTable;
