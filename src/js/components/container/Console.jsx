import React from "react";
import PerceptiveCamera from "./PerceptiveCamera";

class Console extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <PerceptiveCamera width={640} height={480}/>
            </div>
        )
    }
}

export default Console;