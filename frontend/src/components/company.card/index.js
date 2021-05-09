import React from 'react'
import { Link } from "react-router-dom";
import { Card, Item, Icon, Button } from "semantic-ui-react";
import "./company.card.styles.css";

const Index = (props) => {
  const {
    id,
    companyName,
    briefIntro,
    companyPicture,
    aboutCompany,
  } = props.company;

  

  return (
    <>
      <Card fluid>
        <div className="mini-description-card">
          <Link
            to={{
              pathname: `/companies/${id}`,
              state: { companies: props.company },
            }}
          >
            <Item.Group>
              <Item>
                <div>
                  <img
                    className="image-avator-pic"
                    src={companyPicture}
                    alt={companyName}
                  />
                </div>

                <Item.Content>
                  <Item.Header as="a">{companyName}</Item.Header>
                  <Item.Extra>
                    <div className="float-items-right">
                      <Icon name="map marker alternate" />
                      <Item.Meta> No office location</Item.Meta>
                      <div className="move-icon-right">
                        <Icon name="tty" />
                      </div>
                      <Item.Meta> Software Development</Item.Meta>
                    </div>
                  </Item.Extra>
                  <Item.Meta>{briefIntro}</Item.Meta>
                  <Item.Extra>{aboutCompany}</Item.Extra>
                  <Item.Extra>
                    <div className="float-items-right">
                      <span className="small-icon-link"> java</span>
                      <div className="move-icon-right">
                        <span className="small-icon-link"> node</span>
                      </div>
                      <div className="move-icon-right">
                        <span className="small-icon-link"> react.js</span>
                      </div>
                      <div className="move-icon-right">
                        <Button primary> 3 + jobs</Button>
                      </div>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default Index





