import React from 'react';
import axios from 'axios';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'

// Here we should update BodyParts also!!

export default class PoseScore extends React.Component {
    state = {
      scores: []
    }

    paintBodyParts(){
      console.log(this.state);
    }
  
    componentDidMount() {
      axios.get(`http://jagtmove.herokuapp.com/results`, {
        headers: {'Acess-Control-Allow-Origin': '*'},
        proxy: {
          host:'http://jagtmove.herokuapp.com/'
        }
      })
        .then(res => {
          const dataJson = res['data'];
          const recentData = dataJson[dataJson.length-1].result;
          localStorage.setItem('data', JSON.stringify(recentData));
          console.log("hey");
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <ul>
        </ul>
      );
    }
  }