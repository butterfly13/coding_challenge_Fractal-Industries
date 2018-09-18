import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    handleInputString = () =>{
        console.log(this.state.input.length);
        let input = this.state.input;
        let split = input.split("");
        console.log("new split string: " + split);
        let parentheses = ["(", ")"];
        let tempArray = [];
        let span = document.getElementById("result");

        //Check if there is any input in the field
        if(input.length > 0){
            for(var i = 0; i < split.length; i++){
                //check if split contains any parentheses
                if(parentheses.indexOf(split[i]) > -1) {
                    // if yes, check if it is open parentheses
                    // if it is open parentheses, push it to tempArray
                    if(split[i] === parentheses[0]){
                        tempArray.push(split[i]);
                        console.log(`temp array: ${tempArray}`);
                        // check if the current item is the same as the last item in the tempArray
                        // if yes, it is not balanced
                        if(split[i] === tempArray[tempArray.length - 1] ){

                            console.log('it is not balanced parenthese')
                            span.innerHTML = "It is not balanced parenthese!";
                            span.style.color = "red";
                         }
                    // if it is not open parentheses, compare the current item to the last item in the tempArray
                    } else {
                        // if the last item in the tempArray is not the same as the current item, it is balanced parentheses
                        if(split[i] !== tempArray[tempArray.length - 1] ){
                            if(split[i] === parentheses[1]){
                                tempArray.pop()
                                if(tempArray.length === 0){
                                    console.log('it is balanced parentheses')
                                    span.innerHTML = "It is balanced parenthese!"
                                    span.style.color = "green";
                                }
                            }
                        } 
                     
                    }
                } else {
                    // if the input doesn't have any parentheses
                    span.innerHTML = "There is no parenthese in this input.";
                    span.style.color = "red";
                }
                
            }
        } else {
    
            span.innerHTML = "Please enter your code to validate parentheses!";
            span.style.color = "red";
        }
    }

    handleChange = (e) => {
    
        this.setState({input: e.target.value})
       
      }

    handleSubmit = (e) => {
        e.preventDefault();
        // alert("Your text is:" + this.state.input);
        this.handleInputString();
        this.setState({input:""});
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Balanced parenthese Validator: </label> <br /> <br />
                    <textarea 
                        placeholder="enter your code here" 
                        cols="50" rows="5"
                        name="input"
                        value={this.state.input}
                        onChange={this.handleChange}
                    >

                    </textarea> <br />
                    <input type="submit" value="Submit" />
                </form> <br />
                <span id="result"></span>
            </div>
        );
    }
}

export default Validator;