import React from 'react'
import Webcam from 'react-webcam';

class PerceptiveCamera extends React.Component{
    constructor(props){
        super(props);
        this.videoConstraints = {
            width : 640,
            height : 360,
            facingMode : 'user'
        }

        //Function binding
        this.setRef = this.setRef.bind(this);
        this.caputre = this.capture.bind(this);
    }

    setRef(webcam){
        this.webcam = webcam;
    }

    capture(){
        const imageSrc = this.webcam.getScreenshot();
    }

    render(){
        return(
            <div>
                <Webcam
                    audio = {false}
                    height = {this.props.height}
                    width = {this.props.width}
                    ref = {this.setRef}
                    screenshotFormat = "image/jpeg"
                    videoConstraints = {this.videoConstraints}
                >
                </Webcam>
            </div>
        )
    }
}

export default PerceptiveCamera;