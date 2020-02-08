import React from 'react';
import styled,{ ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%
`;

export default ()=> (
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <Navbar>
      <Navbar.Brand href="#home" class="logo">JagtMove Analytics</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Dr.Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <br/>

  </ThemeProvider>
);
