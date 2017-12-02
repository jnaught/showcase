
import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super();

        this.state = {


        }
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <span className="puzzleText"></span>
            <input className="inputLine"></input>
            <button className="confirmationButton"> </button>
            <span className="resultsBox filterStringRB"></span>
            <h4> Filter String </h4>
            <p> FilterStrings Component </p>



            </div>
        )
    }
}