import React from "react";
import { Image, Item } from "semantic-ui-react";

const Index = () => (
  <Item.Group>
    <Item>
      <Item.Image size="tiny" src="https://i.stack.imgur.com/pG1OB.jpg?s=64" />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>
          Amy is a violinist with 2 years experience in the wedding industry.
          She enjoys the outdoors and currently resides in upstate New York.
        </Item.Meta>
        <Item.Description>
          <Image src="/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default Index;
