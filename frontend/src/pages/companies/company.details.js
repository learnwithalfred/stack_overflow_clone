import React from "react";
import { withRouter } from "react-router-dom";
import TopNavigation from "../../components/page.layout/header.nav";
import LeftSideCard from "../../components/page.layout/left.side.card";
import LeftSideNav from "../../components/page.layout/left.side.nav";
import { Grid, Menu, Image, Button, Icon, Card } from "semantic-ui-react";
import Footer from "../../components/page.layout/footer";
import { Link } from "react-router-dom";
import "./companies.styles.css";

const Details = (props) => {
  const {
    companyName,
    briefIntro,
    companyPicture,
    aboutCompany,
    createAt,
  } = props.location.state.companies;
  return (
    <>
      <TopNavigation />
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={3}>
            <LeftSideNav/>
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid.Row>
              <Grid.Column width={13}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <Image
                      size="tiny"
                      circular
                      src="https://i.stack.imgur.com/QRoGt.png"
                    />
                  </div>

                  <div style={{ marginLeft: "10px", fontSize: "16px" }}>
                    <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                      {companyName}
                    </div>
                    <div>Filestage GmbH – No office location</div>
                    <div style={{ color: "orange" }}>Remote</div>
                    <div style={{ marginTop: "20px" }}>
                      <Button primary>
                        <Icon name="edit outline" /> Apply
                      </Button>
                      <Button basic color="blue">
                        Save
                      </Button>
                      <Button basic color="blue">
                        <Icon color="blue" name="ellipsis horizontal" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                  <Menu secondary>
                    <Link>
                      {" "}
                      <Menu.Item>About</Menu.Item>
                    </Link>
                    <Link>
                      {" "}
                      <Menu.Item>Stack</Menu.Item>
                    </Link>
                    <Link>
                      {" "}
                      <Menu.Item>Jobs</Menu.Item>
                    </Link>
                  </Menu>
                  {/* end of simple menu */}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={8}>
            <div>
              <img
                className="comapny-image-card"
                src={companyPicture}
                alt="https://i.stack.imgur.com/UdgNj.jpg"
              />
              <ul>
                <li className="company-mini-description">{briefIntro}</li>

                <li className="company-mini-description">{aboutCompany}</li>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <h2>About</h2>
            <Card fluid>
              <Card.Content>
                <h5>WEBSITE</h5>
                <Link>finn.io</Link>
                <h5>INDUSTRY</h5>
                <Card.Description>
                  Agile Software Development, Automotive, Mobility
                </Card.Description>

                <div className="mini-details">
                  <Card.Content extra>
                    <h5>SIZE</h5>
                    <p>51-200 employees</p>
                  </Card.Content>
                  <Card.Content extra>
                    <h5>FOUNDED</h5>
                    <p>2012</p>
                  </Card.Content>
                  <Card.Content extra>
                    <h5>STATUS</h5>
                    <p>Private</p>
                  </Card.Content>
                </div>

                <div className="mini-details">
                  <Card.Content extra>
                    <h5>FOLLOWERS</h5>
                    <p>8</p>
                  </Card.Content>
                  <Card.Content extra>
                    <h5>SOCIAL</h5>
                    <div>
                      <Icon size="big" color="blue" name="instagram" />
                      <Icon size="big" color="blue" name="facebook" />
                      <Icon size="big" color="twitter" name="twitter" />
                      <Icon size="big" color="yellow" name="snapchat" />
                    </div>
                  </Card.Content>
                </div>
              </Card.Content>
            </Card>
            <div className="join-us-details">
              <h3>Office Locations</h3>
              <div>
                <Icon size="large" name="map marker alternate" />
                Lindwurmstraße 76, 80337 Munich
              </div>
            </div>
            <div className="join-us-details">
              <h3>Company Benefits</h3>
              <div className="icon-spaced-out">
                <Icon size="large" name="dollar" />
                1,500€ yearly personal development budget
              </div>
              <div className="icon-spaced-out">
                <Icon size="large" name="heart outline" />
                Located in heart of Munich (Poccistrasse)
              </div>
              <div className="icon-spaced-out">
                <Icon size="large" name="smile outline" />
                We love and live an agile work environment
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
};

export default withRouter(Details);
