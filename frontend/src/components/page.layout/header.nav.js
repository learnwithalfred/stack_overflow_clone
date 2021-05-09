import React from "react";
import { Button, Menu, Input, Image } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

function HeaderNavigation() {
  return (
    <>
      <Menu secondary size="small">
        <Menu.Item>
          <Menu.Item as="a">
            {" "}
            <NavLink to="/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
                size="small"
                verticalAlign="top"
              />
            </NavLink>
          </Menu.Item>
          <Menu.Item color="black" as="a">
            {" "}
            <NavLink to="/jobs">Jobs</NavLink>{" "}
          </Menu.Item>
          <Menu.Item as="a">
            {" "}
            <NavLink to="/companies">Companies</NavLink>
          </Menu.Item>
          <Menu.Item>
            <Input
              style={{ width: "300px" }}
              color="blue"
              icon="search"
              placeholder="Search..."
            />
          </Menu.Item>
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic color="blue" as="a">
            <NavLink to="/admin"> Log in</NavLink>
          </Button>
          <Button primary as="a" style={{ marginLeft: "0.5em" }}>
            Sign up
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default HeaderNavigation;
