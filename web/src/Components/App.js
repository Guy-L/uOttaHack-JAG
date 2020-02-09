import styled,{ ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from "react";
import {Radar} from 'react-chartjs-2';
import { Card} from 'reactstrap';

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


export default ()=> (
  <ThemeProvider theme={Theme}>
    <Navbar color="light" light id="navigation-bar">
      <Navbar.Brand href="#home" id="brand" >
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
    <br/>

    <div id="content">
      <Card>
        <BodySvg/>
      </Card>
      <Card>
        <Radar>
        </Radar>
      </Card>
    </div>
  </ThemeProvider>
);
