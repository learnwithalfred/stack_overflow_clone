// import React from 'react'
import { Card, Item, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./job.card.styles.css";




const Index = (props) => {
  const { id, name, role, jobDescription, createdAt } = props.job;
  return (
    <>
      <Card fluid>
        <div className="mini-description-card">
          <Link to={{ pathname: `/jobs/${id}`, state: { jobs: props.job } }}>
            <Item.Group>
              <Item>
                <Item.Image
                  size="tiny"
                  src="https://i.stack.imgur.com/pG1OB.jpg?s=64"
                />

                <Item.Content>
                  <Item.Header as="a">{name}</Item.Header>
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
                  <Item.Meta>{jobDescription}</Item.Meta>
                  <Item.Extra>{role}</Item.Extra>
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
                        <Button size="mini" primary className="small-icon-link"> 2+ jobs</Button>
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



