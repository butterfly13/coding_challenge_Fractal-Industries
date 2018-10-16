import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    balancedParens = (str) =>{
        //var inputStr = this.state.input
        var newArr = str.split("");
        //console.log(`new arr ${newArr}`)
        return !newArr.reduce((prev, char) =>{
            if(prev < 0) return prev;
            if(char === "(" ) return ++prev;
            if(char === ")") return --prev;
            return prev;
        }, 0)
    }

    handleInputString = () =>{
        let inputStr = this.state.input;
        let span = document.getElementById("result");
        //this.balancedParens(inputStr);
        if(inputStr.length > 0){
            console.log(this.balancedParens(inputStr));
            if(this.balancedParens(inputStr)){
                span.innerHTML = "It is balanced parenthese!"
                span.style.color = "green";
            } else {
                span.innerHTML = "It is not balanced parenthese!"
                span.style.color = "red";
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