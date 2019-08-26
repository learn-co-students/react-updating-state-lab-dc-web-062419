// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicker extends Component{

    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    addClick = () => {
    
        this.setState(state => ({timesClicked: state.timesClicked + 1 }))
        

    }

    render() {
        
        return(
         <button onClick={this.addClick}>{this.state.timesClicked}</button>
        )
    }

}
