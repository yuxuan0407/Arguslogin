import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import Webcam from "react-webcam";
import Center from "react-center"


const Header = {
    color: "red",
    fontSize: "70px"
}

const Button1 ={
    padding: "10px 20px",
    width: "70%",
    height: "40%",
    fontSize:"20px",
    justifyContent:"center"
}

class App extends Component {

    render() {
        return (
            <Center>
            <div>
        
            <p style={Header}>Argus</p>
                
            <Webcam />
            
            <Button style={Button1}> Click to Scan </Button>
            </div>
            </Center>
        );
    }
}


ReactDOM.render(
    <App/>, document.getElementById("root")
);