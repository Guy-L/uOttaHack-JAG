import styled,{ ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'
import React, { useState, useRef, useEffect } from "react";
import {Radar} from 'react-chartjs-2';
import { Card,CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader, Container, Row, Col } from 'reactstrap';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

export default ()=> (
  <ThemeProvider theme={Theme}>
    <Navbar color="light" light id="navigation-bar">
      <Navbar.Brand href="#home" id="brand">
        <img src="https://img.icons8.com/color/48/000000/sports-mode.png"></img>
        JagtMove Analytics
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Dr.Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
        <Row id="content">
            <Col xs={8}>
              <CardHeader>Natalie's Pose Score
              </CardHeader>
              <CardBody>
                <BodyParts/>
              </CardBody>
            </Col>
            <Col xs={4} id="bottom-right">
              <Row>
                <div></div>
                </Row>
                <Row>
                  <Radar data={data} padding={0} margin={0} id="summary">
                  </Radar>
                </Row>     
            </Col>
        </Row>
  </ThemeProvider>
);
