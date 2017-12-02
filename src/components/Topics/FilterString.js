
import React, {Component} from 'react';

export default class FilterString extends Component{
    //constructor
    constructor(){
        super();
    //create initial state
        this.state = {
            fruit: ['apples', 'bananas','cherries','grapes','pineapple'],
            userInput: '',
            filteredArray: []
        }
    }
        //create handlers
        //userInput change handler
        changeHandler(value){
            this.setState({userInput: value})
        }
        filterNames(userInput){
            var fruit = this.state.fruit;
            var filteredFruit = [];
            for(var i = 0; i < fruit.length; i++){
                if(fruit[i].includes(userInput)){
                    filteredFruit.push(fruit[i])
                }

            }
            this.setState({filteredArray: filteredFruit});
            }
        
        
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <span className="puzzleText">Fruits: {JSON.stringify(this.state.fruit, null,10)}</span>
            <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}></input>
            <button className="confirmationButton" onClick={ () => {this.filterNames(this.state.userInput)}}> </button>
            <span className="resultsBox filterStringRB">Filtered Fruits: {this.state.filteredFruit}</span>
            <h4> Filter String </h4>



            </div>
        )
    }
}