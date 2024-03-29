import React from "react";
import { Grid, Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CompanyDetailsComponent() {
  return (
    <>
      <div style={{ margin: "50px" }}>
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
              JS Full Stack Developer
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
          <Menu>
            <Link to="/admin">
              <Menu.Item>Overview</Menu.Item>
            </Link>
            <Link to="/admin">
              <Menu.Item>Company</Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Link to="/admin">
                <Menu.Item name="React to this job:" />
              </Link>
              <Link to="/admin">
                <Menu.Item>
                  <Icon name="thumbs up" />: 0
                  <Icon style={{ marginLeft: "15px" }} name="thumbs down" />
                  : 0
                  <Icon style={{ marginLeft: "15px" }} name="heart" />: 0
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Menu>
          {/* end of simple menu */}
        </div>

        <Grid.Column>
          <h3>About this job</h3>
          <h3>Job type: Full-time</h3>
          <h3>Experience level: Mid-Level, Senior, Lead</h3>

          <h4>Role: Full Stack Developer</h4>

          <h3>Technologies</h3>

          <h5>node.js reactjs amazon-web-services docker javascript</h5>

          <h2>Job description</h2>

          <h5>Your mission</h5>

          <ul>
            <li>
              You simplify our customers' workflow. As a member of our
              interdisciplinary product squads, you take part in building
              outstanding features. You revolutionize how customers receive and
              manage feedback.
            </li>
            <li>
              You take full ownership of planning, technical conception,
              implementation, testing, and releasing of new functionality. You
              monitor the progress of your team, overcome obstacles and manage
              expectations.
            </li>
            <li>
              You contribute to our well-oiled development-machine. Coding is
              fun when developing scalable and maintenance-friendly modules is
              made easy. You work together with our DevOps chapters. You design
              functionality and put test scenarios in place. You review the code
              of peers, share your experiences, and refactor your code.
            </li>
          </ul>

          <h3>You’re good at</h3>

          <ul>
            <li>
              You’re an experienced Full Stack Engineer with 5+ years of
              developing feature-rich SPAs using Node, React, Websockets &
              MongoDB.
            </li>
            <li>
              You’re a strong communicator and have experience collaborating
              with a distributed team. You know how to explain complex tech to
              non-tech people and how to communicate with various stakeholders
              to ensure everyone is up to date.
            </li>
            <li>
              You hold yourself to a high coding standard. You write reliable,
              performant, and easy to understand code. You are experienced in
              using best practices like DDD, TDD, and CD. You are keen to become
              even better.
            </li>

            <h4>How to apply?</h4>
          </ul>

          <ul>
            <li>
              Please fill out our application form. There is no need to write a
              novel, keep it sharp, short and get across what matters to you. We
              value great writers, so take your time with the application. We're
              giving you our full attention.
            </li>
            <li>
              We will get back to you within 5 days with some feedback about
              whether you've advanced the application process.
            </li>

            <h5>Our team is looking forward to getting to know you!</h5>
          </ul>

          <Button primary size="large">
            <Icon name="edit" /> Apply
          </Button>

          <h3>About Filestage GmbH</h3>

          <h5>About Us</h5>

          <p>
            At Filestage we believe that broken workflows poison teams with
            miscommunication, friction, and frustration.
          </p>
          <p>
            Our mission is to free teams from chaotic file review and proofing
            workflows, with a simple, flexible, and effective online proofing
            solution. With everything we do, we lead people towards being
            happier and more successful at work.
          </p>

          <p>
            Over 500 companies (and growing!) all over the world like Lufthansa,
            Canadian Tire, or Rabobank benefit from happier and more productive
            employees with Filestage.
          </p>

          <h2>Similar jobs</h2>
        </Grid.Column>
      </div>
    </>
  );
}

export default CompanyDetailsComponent;
