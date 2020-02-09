import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as BodySvg} from '../Assets/body-part.svg'


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
                    
                    node.querySelectorAll('g').forEach(line=>{
                        if (regex.test(line.id)) {
                            display_bar = line
                        } 
                    }) 
                    
                    // 
                    item.querySelector('circle').addEventListener('mouseout', ()=>{
                        item.style.opacity = '0'
                        display_bar.style.opacity = '0'
                        display_bar.querySelector('text').innerHTML = 'Hello World'
                    })

                    // 
                    item.querySelector('circle').addEventListener('mouseover', ()=>{
                        item.style.opacity = '1'
                        display_bar.style.opacity = '1'
                    })
                } catch {}
            }
        })
    }

    render() {
      return (<BodySvg />)
    }
}

export default BodyParts