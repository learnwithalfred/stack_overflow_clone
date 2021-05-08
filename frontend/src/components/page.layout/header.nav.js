import React from "react";
import {
  Button,
  Menu,
  Input,
} from "semantic-ui-react";

function HeaderNavigation() {
  return (
    <>
      <>
        <Menu  secondary size="small">
          <Menu.Item>
            <Menu.Item as="a">Home</Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Item>
          <Menu.Item position="right">
            <Button as="a">Log in</Button>
            <Button as="a" style={{ marginLeft: "0.5em" }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Menu>
      </>
    </>
  );
}

export default HeaderNavigation;
