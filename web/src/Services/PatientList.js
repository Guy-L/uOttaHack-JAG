import React from 'react';
import axios from 'axios';

export default class PatientList extends React.Component {
    state = {
      PatientList: []
    }
  
    componentDidMount() {
      axios.get(`http://jagtmove.herokuapp.com/`, {
        headers: {'Acess-Control-Allow-Origin': '*'},
        proxy: {
          host:'http://jagtmove.herokuapp.com/'
        }
      })
        .then(res => {
          console.log(res);
          const inputJsonString = res.input;
          console.log(inputJsonString);
          this.setState({ inputJsonString });
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <ul>
          `${this.state.scores}$
        </ul>
      );
    }
  }