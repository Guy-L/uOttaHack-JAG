import {Radar} from 'react-chartjs-2';
import React from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron} from 'reactstrap';

const data = {
    labels: ['Head', 'Shoulders', 'Elbows', 'Wrists', 'Hip', 'Knees', 'Ankles'],
    datasets: [
      {
        label: 'Previous Pose Score',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'Current Pose Score',
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

const currentScore = JSON.parse(localStorage.getItem("data"));
const pastScore = JSON.parse(localStorage.getItem("pastData"));
console.log('currentScore', currentScore);

class RadarGraph extends React.Component {
    computeScore(error){
        console.log("ERROR GOT", error)
        let ret = 0;
        if (60<= error) { ret = 0 }
        else { ret = 1-(error/60) }
        console.log("SCORE IS GOT", error)

        return ret;
    }

    componentDidMount() {
        const currentRet = {'head':null,
    'shoulder':null,
    'elbow': null,
    'wrist': null,
    'hip': null,
    'knee': null,
    'ankle': null};
    const pastRet = {'head':null,
    'shoulder':null,
    'elbow': null,
    'wrist': null,
    'hip': null,
    'knee': null,
    'ankle': null};

        Object.keys(currentScore).forEach(k=> {
            if (k.endsWith("SHOULDER")){
                currentRet["shoulder"] = ( currentRet["shoulder"]=== null || currentRet["shoulder"] < currentScore[k] ) ? currentScore[k] : currentRet["shoulder"];
                return;
            } else if (k.endsWith("ELBOW")) {
                currentRet["elbow"] = ( currentRet["elbow"]=== null || currentRet["elbow"] < currentScore[k]) ? currentScore[k] : currentRet["elbow"];
                return;
            } else if (k.endsWith("WRIST")){
                let tmp = "wrist";
                currentRet[tmp] = ( currentRet[tmp]=== null || currentRet[tmp] < currentScore[k]) ? currentScore[k] : currentRet[tmp];
                return;
            } else if(k.endsWith("HIP")){
                let tmp = "hip";
                currentRet[tmp] = ( currentRet[tmp]=== null || currentRet[tmp] < currentScore[k]) ? currentScore[k] : currentRet[tmp];
                return;
            } else if(k.endsWith("KNEE")){
                let tmp = "knee";
                currentRet[tmp] = ( currentRet[tmp]=== null || currentRet[tmp] < currentScore[k]) ? currentScore[k] : currentRet[tmp];
                return;
            } else if(k.endsWith("ANKLE")) {
                let tmp = "ankle";
                currentRet[tmp] = ( currentRet[tmp]=== null || currentRet[tmp] < currentScore[k]) ? currentScore[k] : currentRet[tmp];
                return;
            }
        });
        
        Object.keys(pastScore).forEach(k=> {
            if (k.endsWith("SHOULDER")){
                pastRet["shoulder"] = ( pastRet["shoulder"]=== null || pastRet["shoulder"] < pastScore[k]) ? pastScore[k] : pastRet["shoulder"];
                return;
            } else if (k.endsWith("ELBOW")) {
                pastRet["elbow"] = ( pastRet["elbow"]=== null || pastRet["elbow"] < pastScore[k]) ? pastScore[k] : pastRet["elbow"];
                return;
            } else if (k.endsWith("WRIST")){
                let tmp = "wrist";
                pastRet[tmp] = ( pastRet[tmp]=== null || pastRet[tmp] < pastScore[k]) ? pastScore[k] : pastRet[tmp];
                return;
            } else if(k.endsWith("HIP")){
                let tmp = "hip";
                pastRet[tmp] = ( pastRet[tmp]=== null || pastRet[tmp] < pastScore[k]) ? pastScore[k] : pastRet[tmp];
                return;
            } else if(k.endsWith("KNEE")){
                let tmp = "knee";
                pastRet[tmp] = ( pastRet[tmp]=== null || pastRet[tmp] < pastScore[k]) ? pastScore[k] : pastRet[tmp];
                return;
            } else if(k.endsWith("ANKLE")) {
                let tmp = "ankle";
                pastRet[tmp] = ( pastRet[tmp]=== null || pastRet[tmp] < pastScore[k]) ? pastScore[k] : pastRet[tmp];
                return;
            }
        }  );  
        
        data.datasets[0]["data"] = Object.values(pastRet).forEach(element=>this.computeScore(element));
        data.datasets[1]["data"] = Object.values(currentRet).forEach(element=>this.computeScore(element));
    }

    render() {
        //this.calculateScores();
        return (
            <div>
                <Radar data={data} padding={20} id="summary"/>                
                <Jumbotron>  
                    * For succinct summary, if we collected two different points to produce one score, we used the worst score as the indication
                </Jumbotron>
            </div>
        )
    }
}

export default RadarGraph;
  