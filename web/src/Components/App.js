import styled,{ ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import React, { useState, useRef, useEffect } from "react";
import { Card,CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader, ButtonGroup, Row, Col, ButtonToggle } from 'reactstrap';
import BodySvg from './BodyParts';
import RadarGraph from "./RadarGraph";
import JagtLogo from '../Assets/JAGTMove.ico'
import JagtText from '../Assets/jactmovetext.PNG'
import SearchBar from './SearchBar';
import PoseScore from "../Services/PoseScore"
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%
`;

export default ()=> (
  <ThemeProvider theme={Theme}>
    <Navbar color="light" light id="navigation-bar">
      <Navbar.Brand href="#home" id="brand">
        <img src={JagtText} style={{width:400, padding:5, marginLeft:-25}} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Dr.Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
        <Row id="content">
            <Col xs={7} className="ml-5">
              <CardHeader>Natalie's Pose Score
              </CardHeader>
              <CardBody>
                <BodySvg/>
              </CardBody>
            </Col>
            <Col xs={4}>
              <Row>
                <RadarGraph/>
              </Row>
            
              <Row>
                <Col className="px-5 mt-5">
                  <ButtonGroup>
                      <ButtonToggle color="secondary">Past History</ButtonToggle>  
                      <ButtonToggle color="secondary">Edit Routine</ButtonToggle>
                      <ButtonToggle color="danger">Patient Contact</ButtonToggle>   
                    <ButtonToggle class = "px-5" color="info">Patient Database</ButtonToggle>
                  </ButtonGroup>
                </Col>
              </Row>   
              <Row>
                <Col className="mt-2">
                </Col>
              </Row>  
              <Row>
                <Col className="px-5 mt-2">
                </Col>
              </Row>  
              <Row>
                <Col className="px-5 mt-2">
                  <SearchBar/>
                </Col>
              </Row>
            </Col>
        </Row>
        <PoseScore/>
  </ThemeProvider>
);
