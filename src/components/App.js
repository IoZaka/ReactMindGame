import React from 'react';
import AddNumber from './AddNumber/AddNumber.js';
import Result from './result/Result.js';
import Guesses from './Guesses/Guesses.js';
import './App.css';

var numbers = [1,2,3,4,5,6,7,8,9,10];

class App extends React.Component{

    constructor(){
        super();
        this.state={
            inputNumber:-1,
            randomNumber:-1,
            resultTxt:'',
            tries:0,
            guesses:[]
        }
    }


    componentDidMount(){
        let selectedNumber = numbers[Math.floor(Math.random() * numbers.length)];
        console.log('selected number->'+ selectedNumber)
        this.setState({randomNumber:selectedNumber});
        
    }

    onChangeNumber=(number)=>{
        console.log('number->' + number);
        this.setState({inputNumber:number});

       
        
        this.setState({})
    }

    onSubmit=()=>{
        let ltries;
        let lguess;
        let oldGuesses = this.state.guesses;
        
        if(this.state.inputNumber > this.state.randomNumber){
            this.setState({resultTxt:'Input value is greater than the random number'});
        }else if(this.state.inputNumber < this.state.randomNumber){
            this.setState({ resultTxt:'Input value is less than the random number'});
        }else if(this.state.inputNumber == this.state.randomNumber){
            this.setState({resultTxt:'Congratulations! You won!!'});
        }
        ltries = this.state.tries + 1;
        lguess = {guess: ltries ,val:this.state.inputNumber};
        let newGuesses = [...oldGuesses,lguess];
        this.setState({tries:ltries,guesses:newGuesses});
    }







    render(){
        return(
            <div className="mainContainer">
                <div className="inputArea">
                <AddNumber
                    inputNumber={this.state.inputNumber}
                    onChangeNumber={this.onChangeNumber}
                    onSubmit={this.onSubmit}
                
                />

                <Result
                    resultTxt={this.state.resultTxt}
                />
                </div>
                <div className="guessArea">
                <Guesses
                    guesses={this.state.guesses}

                />
                </div>
            </div>

        )
    }
}

export default App;