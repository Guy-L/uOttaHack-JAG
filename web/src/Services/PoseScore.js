import React from 'react';
import axios from 'axios';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'
import BodyParts from '../Components/BodyParts'
// Here we should update BodyParts also!!

export default class PoseScore extends React.Component {
    state = {
      scores: []
    }

    paintBodyParts(){
      console.log(this.state);
    }
  
    componentDidMount() {
      setInterval(()=>{axios.get(`http://jagtmove.herokuapp.com/result`, {
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: {
          host:'http://jagtmove.herokuapp.com/'
        }
      })
        .then(res => {
          const dataJson = res['data'];
          const recentData = dataJson[dataJson.length-1].result;
          const pastData = dataJson[dataJson.length-2].result;
          localStorage.setItem('data', JSON.stringify(recentData));
          localStorage.setItem('pastData', JSON.stringify(pastData));
          console.log("Rdata", recentData);
        })
        .catch(error => {
          console.log(error)
        })}, 1000)
    }
  
    render() {
      return (
        <BodyParts/>
      );
    }
  }