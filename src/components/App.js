import React from 'react';
import AddNumber from './AddNumber/AddNumber.js';
import './App.css';
import { thisExpression } from '@babel/types';


var numbers = [1,2,3,4,5,6,7,8,9,10]; 

class App extends React.Component{
    
    constructor(){
        super();
        this.state={
            inputNumber:-1,
            randomNumber:-1,
            resultTxt:''
        }


    
    }


    componentDidMount(){
       let selectedNumber =  numbers[Math.floor(Math.random() * numbers.length)];
       console.log('selectedNumber-> '+selectedNumber);
       this.setState({randomNumber:selectedNumber});

    }

    onChangeNumber=(number)=>{
        console.log('number-> '+number);
        this.setState({inputNumber:number});
    }

    onSubmit=()=>{
      
        if(this.state.inputNumber > this.state.randomNumber){
            this.setState({resultTxt:'Greater Than'})
        }else if (this.state.inputNumber < this.state.randomNumber){
            this.setState({resultTxt:'Less Than'})
        }else if(this.state.inputNumber == this.state.randomNumber ){
            this.setState({resultTxt:'You win'})
        }

        
    }



    render(){
        return(
            <div className="mindtrap-container">
                <AddNumber
                inputNumber={this.state.inputNumber}
                onChangeNumber={this.onChangeNumber}
                onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


export default App;