import React from "react";
import { Input, Menu, Form } from "semantic-ui-react";

const Index = () => {
  return (
    <div className="header-container">
      <div>
        <Menu pointing>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
          <Menu.Menu>
            <Form>
              <Form.Field>
                <Input icon="search" placeholder="Search..." />
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
};

export default Index;
