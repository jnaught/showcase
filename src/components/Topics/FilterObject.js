
import React, {Component} from 'react';

export default class FilterObject extends Component{

    constructor(){
        super();

        this.state = {

            theObjectArray: [
                {
                name: 'Aaron',
                age: 45,
                hobby: 'Gaming'

            },
            {
                name: 'Shannon',
                age: 38,
                quote: 'What are you going to do about it?'
            },
            {
                name: 'Troy',
                age: 6,
                favFood: 'Pizza'
            },
            {
                name: 'Chloe',
                age: 3,
                favColor: 'Pink'
            }

            ],

            userInput: '',

            filteredArray: []
         }
        }
        handleChange(value){
            this.setState({userInput: value});
        }


        
        filterThis(value){
            var theObjectArray = this.state.theObjectArray;
            var filteredObject = [];
            
            for ( var i = 0; i < theObjectArray.length; i++ ) {
              if ( theObjectArray[i].hasOwnProperty(value) ) {
                filteredObject.push(theObjectArray[i]);
              }
            }
        
            this.setState({ filteredArray: filteredObject });
          }

          
    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>unFilteredArray: {JSON.stringify(this.state.theObjectArray, null, 10)}</span>
            <input className='inputLine' onChange={ (event) => this.handleChange(event.target.value)}></input>
            <button className='confirmationButton' onClick={ () => {this.filterThis(this.state.userInput)}}>Filter </button>
            <span className='resultsBox filterObjectRB'>FilteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            
            </div>
        )
    
    }
}
