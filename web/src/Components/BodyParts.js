import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'
import PoundingCircle from "./PoundingCircle"

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

    computeScore(error){
        console.log("ERROR GOT", error)
        let ret = 0;
        if (60<= error) { ret = 0 }
        else { ret = 1-(error/60) }
        console.log("SCORE IS GOT", error)

        return ret;
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
                    let MSE = JSON.parse(localStorage.getItem("data"))[lsIdx];
                    let score = (MSE === null) ? 'N/A' : this.computeScore(MSE);
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
                        console.log('mouseout',item);
                    })

                    // 
                    item.querySelector('circle').addEventListener('mouseover', ()=>{
                        console.log(item.id)
                        console.log(item)
                        const x =window.scrollX +item.querySelector('g').querySelector('circle').getBoundingClientRect().left
                        const y =window.scrollX +item.querySelector('g').querySelector('circle').getBoundingClientRect().top
                        console.log("("+x+" "+y+")" )
                        //document.body.innerHTML += `<div class="container"><div class="poundingCircle" style="position:absolute;z-index:100; left: ${x}; top: ${y}">sldfkjsdlkfj</div></div>`
                        item.style.opacity = '1';
                        display_bar.style.opacity = '1';
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

export default BodyParts;