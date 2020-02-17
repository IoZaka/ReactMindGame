import React from 'react';
import  './Result.css';

class Result extends React.Component{
    
    render(){
        return(
            <div className="Result-container">
                    <p className="result-txt" >{this.props.resultTxt}</p>
            </div>

        )
    }
}
export default Result;