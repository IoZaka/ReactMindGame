import React from 'react';
import './AddNumber.css';

class AddNumber extends React.Component{

    
    render(){
        let result = this.props.inputNumber === -1 ? '' : this.props.inputNumber;
        return(
            <div className="addNumber-container">
                
                <input type="number" value={result} onChange={(e)=>{this.props.onChangeNumber(e.target.value)}}/>
                <button className="submitBtn" onClick={this.props.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default AddNumber;