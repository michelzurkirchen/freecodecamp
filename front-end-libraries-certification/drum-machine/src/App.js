import React from 'react';
import './App.css';

const soundsLocation =
  "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/";

const Display = props => {
  return (
    <p key="display" id="display">{props.activekey}</p>
  );
};

const Drumpad = props => {
  return (
    <button
      key={"drum-pad-" + props.drumkey}
      id={"drum-pad-" + props.drumkey}
      className="drum-pad"
      onClick={props.playsound}
    >
      {props.drumkey}
      <audio
        id={props.drumkey}
        className="clip"
        src={soundsLocation + props.sound}
        onEnded={props.reset}
      />
    </button>
  );
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: ""
    };
    this.playSound = this.playSound.bind(this);
    this.resetActive = this.resetActive.bind(this);
  }

  playSound(e) {
    const k = (typeof e == 'object') ? e.target.innerText : e
    this.setState({ activeKey: k });
    const el = document.getElementById(k);
    if (el.paused) {
      el.play();
    } else {
      el.currentTime = 0;
    }
  }

  resetActive() {
    this.setState({ activeKey: "" });
  }

  componentDidMount() {
    const callPlaySound = (i) => { this.playSound(i) }

    let el = "";
    document.addEventListener("keypress", function(k) {
      el = k.key.toUpperCase();
      if (['Q','W','E','A','S','D','Z','X','C'].includes(el)) {
        callPlaySound(el)
      }
    });
  }

  render() {
    return (
      <div id="machine" key="machine">

        <Display activekey={this.state.activeKey} />
        <div id="buttons-container">
        <Drumpad
          drumkey="Q"
          sound="boom.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="W"
          sound="clap.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="E"
          sound="hihat.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="A"
          sound="kick.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="S"
          sound="openhat.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="D"
          sound="ride.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="Z"
          sound="snare.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="X"
          sound="tink.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        <Drumpad
          drumkey="C"
          sound="tom.wav"
          playsound={this.playSound}
          reset={this.resetActive}
        />
        </div>
      </div>
    );
  }
}

export default DrumMachine;
