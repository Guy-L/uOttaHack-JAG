import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'

const ids=['nose', 'left-shoulder', 'right-shoulder', 'left-elbow', 'right-elbow', 'left-wrist', 'right-wrist', 'left-hip', 'right-hip', 'left-knee', 'right-knee', 'left-ankle', 'right-ankle' ]
class BodyParts extends React.Component {
    hideAllParts() {
        const node = ReactDOM.findDOMNode(this);

        // Hacky way to initially hide everything
        const is_bodypart = RegExp('(left.*|right.*|nose)');

        const is_display_bar = RegExp('.*display.*')
        node.querySelectorAll('g').forEach(item=>{
            if (is_display_bar.test(item.id)) item.style.opacity = '0' 
        }) 

        node.querySelectorAll('g').forEach(item=>{
            if (is_bodypart.test(item.id)) {
                item.style.opacity = '0'  
            }
        })
    }

    componentDidMount(){
        this.hideAllParts()

        const node = ReactDOM.findDOMNode(this);
        const is_right = RegExp('right.*')
        const is_top = RegExp('(nose|.*shoulder|.*elbow|.*wrist)')
        const is_bodypart = RegExp('(left.*|right.*|nose)');
        console.log('bodyParts')
        node.querySelectorAll('g').forEach(item=>{
            if (is_bodypart.test(item.id)) {
                item.style.opacity = '0'  

                // Try adding an event listener (will fill on corner displays)
                try {
                    // Choose which display-bar to use
                    let display_bar_regex = ''
                    display_bar_regex += is_top.test(item.id) ? 'top.*' : 'bottom.*'
                    display_bar_regex += is_right.test(item.id) ? 'right.*' : 'left.*'
                    let regex = RegExp(display_bar_regex)
                    let display_bar = undefined

                    let lsIdx = item.id.replace("-", "_").toUpperCase();
                    let score = JSON.parse(localStorage.getItem("data"))[lsIdx];
                    score = (score === null) ? 'N/A' : score;
                    console.log(score);
                    node.querySelectorAll('g').forEach(line=>{
                        if (regex.test(line.id)) {
                            display_bar = line
                        } 
                        // if(line.id === 'right-hip'){
                        //     display_bar.text.transform=`translate(-20 0)`;
                        //     display_bar.style='margin-right:-10'
                        // }
                    }) 
                    
                    let transform = display_bar.querySelector('text').style.transform
                    console.log('transform', transform)
                    // 
                    item.querySelector('circle').addEventListener('mouseout', ()=>{
                        item.style.opacity = '0'
                        display_bar.style.opacity = '0'
                    })

                    // 
                    item.querySelector('circle').addEventListener('mouseover', ()=>{
                        console.log(item.id)
                        item.style.opacity = '1'
                        display_bar.style.opacity = '1'
                        display_bar.querySelector('text').innerHTML = item.id.replace("-", " ").toUpperCase();
                        display_bar.querySelector('text').innerHTML +=`  ❤️ ${score}`;
                    })
                    
                    

                    
                } catch {}
            }
            // attaching numbers
            
        })
    }

    render() {
      return (<BodySvg />)
    }
}

export default BodyParts