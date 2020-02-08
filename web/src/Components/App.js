import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'

export default ()=> (
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <BodySvg />
  </ThemeProvider>
);
