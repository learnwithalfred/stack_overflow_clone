import React from "react";
import { Icon, Table } from "semantic-ui-react";
import {Link} from "react-router-dom"



const CompanyTable = (props) => {
  const {id, name, role, experienceLevel } = props.job;
  return (
    <>
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{experienceLevel}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
        <Table.Cell>
          <Link to={{ pathname: `/jobs/${id}`, state: { jobs: props.job } }}>
            <Icon size="large" name="hand point right outline" />
          </Link>
        </Table.Cell>
      </Table.Row>
    </>
  );
};




export default CompanyTable;
