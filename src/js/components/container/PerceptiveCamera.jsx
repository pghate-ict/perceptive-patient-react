import React from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import { connect } from "react-redux";
import { setRecorderState } from "../../actions/session";
import { recorderStartedEvent } from "../../events/events";
import { recorderState, sessionState } from "../../helpers/states";
import {SenseHelper} from '../../helpers/sense';

const mapDispatchToProps = dispatch => {
  return {
    setRecorderState: recorderState => {
      dispatch(setRecorderState(recorderState));
    }
  };
};

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
      canvas : null,
      recorderState: recorderState.STOPPED
    };
    this.hasGetUserMedia = this.hasGetUserMedia.bind(this);
    this.setupWebcam = this.setupWebcam.bind(this);
    this.startRecorder = this.startRecorder.bind(this);
    this.stopRecorder = this.stopRecorder.bind(this);
    this.setupCanvas = this.setupCanvas.bind(this);
    this.takeScreenshot = this.takeScreenshot.bind(this);
    this.trimUrlMetaData = this.trimUrlMetaData.bind(this);
  }

  componentDidMount() {
    this.setState({
      video: this.refs.video,
      canvas : document.createElement('canvas')
    },()=>{
      this.setupWebcam();
      this.setupCanvas();
    });

  }

  hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  setupWebcam() {
    if (this.hasGetUserMedia()) {
      //Setup
      navigator.mediaDevices
        .getUserMedia(this.videoConstraints)
        .then(stream => {
          this.setState({
            stream: stream
          });
          this.refs.video.srcObject = stream;
          this.refs.video.play();

          let recorder = new RecordRTC.RecordRTCPromisesHandler(stream, {
            type: "video"
          });
          this.setState({
            recorder: recorder
          });
          this.startRecorder();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("Webcam not supported!");
    }
  }

  startRecorder() {
    //local
    this.setState({
      recorderState: recorderState.STARTED
    });
    //global store
    this.props.setRecorderState(recorderState.STARTED);

  }

  stopRecorder(){
    // Save the Blob to global store
  }

  setupCanvas(){
    let canvas = this.state.canvas;
    canvas.width = this.state.video.width;
    canvas.height = this.state.video.height;
  }

  takeScreenshot(){
    let canvas = this.state.canvas;
    let context = canvas.getContext('2d');
    context.drawImage(this.state.video, 0, 0, 640, 360);
    let data = canvas.toDataURL("image/jpeg");
    let b64 = this.trimUrlMetaData(data);
    SenseHelper.getFacialLandmarks(b64).then(()=>{
      console.log("Sent Facial Landmarks");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  trimUrlMetaData(url) {
    let urlString = url.toString();
    let base64string = urlString.match(/\/9j\/.*/);
    return base64string.toString();
  }



  render() {
    return (
      <video ref="video" width={this.props.width} height={this.props.height} onClick={this.takeScreenshot}/>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PerceptiveCamera);
