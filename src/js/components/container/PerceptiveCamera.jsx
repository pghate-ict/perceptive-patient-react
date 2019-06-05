import React from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import {connect} from "react-redux";
import {setRecorderState} from "../../actions/session";
import {recorderStartedEvent} from "../../events/events";

const recorderState = {
    STOPPED : 'STOPPED',
    STARTED : 'STARTED',
    PAUSED : 'PAUSED'
}

const mapDispatchToProps = dispatch => {
    return {
        setRecorderState: (recorderState) => {
            dispatch(setRecorderState(recorderState));
        }
    }
}

class PerceptiveCamera extends React.Component {
  constructor(props) {
    super(props);
    this.videoConstraints = {
      video: true
    };
    this.state = {
      stream: null,
      video: null,
      recorder: null,
      recorderState : recorderState.STOPPED
    };
    this.hasGetUserMedia = this.hasGetUserMedia.bind(this);
    this.setupWebcam = this.setupWebcam.bind(this);
    this.startRecorder = this.startRecorder.bind(this);
  }



  componentDidMount(){
    this.setState({
        video : this.refs.video
    });
    this.setupWebcam();
    this.startRecorder();
  }

  hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  setupWebcam() {
    if (this.hasGetUserMedia()) {
      //Setup
      navigator.mediaDevices.getUserMedia(this.videoConstraints)
      .then((stream)=>{
         this.setState({
             stream : stream
         })
         this.refs.video.srcObject = stream;
         this.refs.video.play();

         let recorder = new RecordRTC.RecordRTCPromisesHandler(stream,{
            type : 'video'
         });
         this.setState({
             recorder : recorder
         })
      })
      .catch((err)=>{
          console.log(err);
      })
    } else {
      alert("Webcam not supported!");
    }
  }

  startRecorder(){
    this.setState({
        recorderState : recorderState.STARTED
    })
    this.props.setRecorderState(recorderState.STARTED);
  }

  render() {
    return <video ref="video"
        width = {this.props.width}
        height = {this.props.height}
    ></video>
  }
}

export default connect(null, mapDispatchToProps)(PerceptiveCamera);
