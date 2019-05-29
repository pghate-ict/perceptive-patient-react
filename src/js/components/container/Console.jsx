import React from "react";
import PerceptiveCamera from "./PerceptiveCamera";
import {observer} from "mobx-react";


class Console extends React.Component{
    constructor(props){
        super(props);
        observer(this);
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