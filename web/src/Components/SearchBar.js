import { Card,CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardHeader, Container, Row, Col, ButtonToggle, Button, Input, InputGroupAddon, InputGroup } from 'reactstrap';
import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    render() {
        return (
        <InputGroup>
            <Input placeholder="Patient ID" />
            <InputGroupAddon addonType="append">
            <Button color="secondary">search</Button>
            </InputGroupAddon>
        </InputGroup>);
    }
}

export default SearchBar;
