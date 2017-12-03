
import React, {Component} from 'react';

export default class Palindrome extends Component{

constructor(){
    super();

    this.state = {
        userInput: '',
        palindrome: ''
    }
}
    handleChange(value){
        this.setState({userInput: value});

    }
    isPalindrome(userInput){
        
        let forward = userInput;
        let reverse = userInput.split('').reverse('').join('');

        if(forward === reverse){
            this.setState({palindrome: 'true'});
        }
        else {
            this.setState({palindrome: 'false'});

        }
        
        }
          
    
    

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Results: {this.state.palindrome}</span>
            



            </div>
        )
    }
}