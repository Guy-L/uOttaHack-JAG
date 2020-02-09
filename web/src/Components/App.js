import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import BodySvg from './BodyParts';
import React from 'react';

export default ()=> (
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <BodySvg />
  </ThemeProvider>
);
