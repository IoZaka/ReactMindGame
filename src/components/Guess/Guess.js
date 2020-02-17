import React from 'react';
import  './Guess.css';

class Guess extends React.Component{
    
    render(){
        return(
            <div className="Guess-container">
                   <p className="Guess-txt" >Try:{this.props.guess}</p>
                   <p className="GuessNo-txt">Number guessed:{this.props.number}</p>
            </div>

        )
    }
}
export default Guess;