import React from 'react';
import './App.css';
import PaceInput from './components/PaceInput.js';
import OverallInput from './components/OverallInput.js';
import DistanceInput from './components/DistanceInput.js';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         timeSeconds: '',
         timeMinutes: '',
         timeHours: '',
         paceHours: '',
         paceMinutes: '',
         paceSeconds: '',
         distance: ''
      };

      this.updatePaceHours = this.updatePaceHours.bind(this);
      this.updatePaceMinutes = this.updatePaceMinutes.bind(this);
      this.updatePaceSeconds = this.updatePaceSeconds.bind(this);
      this.calculateOverallTime = this.calculateOverallTime.bind(this);
      this.calculateDistance = this.calculateDistance.bind(this);
      this.calculatePace = this.calculatePace.bind(this);
      this.updateTimeHours = this.updateTimeHours.bind(this);
      this.updateTimeMinutes = this.updateTimeMinutes.bind(this);
      this.updateTimeSeconds = this.updateTimeSeconds.bind(this);
      this.updateDistance = this.updateDistance.bind(this);
   };

   updatePaceHours(e) {
      this.setState({paceHours: e});
   }
   updatePaceMinutes(e) {
      this.setState({paceMinutes: e});
   }
   updatePaceSeconds(e) {
      this.setState({paceSeconds: e});
   }
   updateTimeHours(e) {
      this.setState({timeHours: e});
   }
   updateTimeMinutes(e) {
      this.setState({timeMinutes: e});
   }
   updateTimeSeconds(e) {
      this.setState({timeSeconds: e});
   }
   updateDistance(e) {
      this.setState({distance: e});
   }

   calculatePace(e) {
    e.preventDefault();
    console.log("CalculatePace()");
    var pace = 0;

    if(this.state.timeHours !== ''){
      pace += +this.state.timeHours * 3600;
    } 
    if (this.state.timeMinutes !== ''){
      pace += +this.state.timeMinutes * 60;
    }
    if(this.state.timeSeconds !== ''){
      pace += +this.state.timeSeconds;
    }

    var hours, minutes, seconds;

    pace /= +this.state.distance;

    if(pace > 3600){
      hours = Math.floor(pace / 3600);
      minutes = Math.floor((pace - (hours * 3600)) / 60);
      seconds = Math.round((pace - (hours * 3600)) % 60);
      this.setState({paceHours: hours});
      this.setState({pacePinutes: minutes});
      this.setState({paceSeconds: seconds});
    }

    if(pace > 60 && pace < 3600){
      minutes = Math.floor(pace  / 60);
      seconds = Math.round(pace % 60);
      this.setState({pacePinutes: minutes});
      this.setState({paceSeconds: seconds});
    }

    if(pace < 60){
      this.setState({paceSeconds: pace});
    }
  }

   calculateOverallTime(e) {
    e.preventDefault();
    var totalSeconds = 0;
    if(this.state.paceHours !== ''){
      totalSeconds += +this.state.paceHours * 3600;
    } 
    if (this.state.paceMinutes !== ''){
      totalSeconds += +this.state.paceMinutes * 60;
    }
    if(this.state.paceSeconds !== ''){
      totalSeconds += +this.state.paceSeconds;
    }

    totalSeconds *= +this.state.distance;

    var hours, minutes, seconds;

    if(totalSeconds > 3600){
      hours = Math.round(totalSeconds / 3600);
      minutes = Math.round((totalSeconds - (hours * 3600)) / 60);
      seconds = Math.round((totalSeconds - ((hours * 3600) - minutes * 60)) / 60);
      this.setState({timeHours: hours});
      this.setState({timeMinutes: minutes});
      this.setState({timeSeconds: seconds});
    }

    if(totalSeconds > 60 && totalSeconds < 3600){
      minutes = Math.round(totalSeconds  / 60);
      seconds = Math.round((totalSeconds - (minutes * 60)) / 60);
      this.setState({timeMinutes: minutes});
      this.setState({timeSeconds: seconds});
    }

    if(totalSeconds < 60){
      this.setState({timeSeconds: totalSeconds});
    }
  }

  calculateDistance(e) {
    e.preventDefault();
    console.log("CalculateDistance()");
    var totalSeconds = 0, paceSeconds = 0;

    if(this.state.timeHours !== ''){
      totalSeconds += +this.state.timeHours * 3600;
    } 
    if (this.state.timeMinutes !== ''){
      totalSeconds += +this.state.timeMinutes * 60;
    }
    if(this.state.timeSeconds !== ''){
      totalSeconds += +this.state.timeSeconds;
    }
    if(this.state.paceHours !== ''){
      paceSeconds += +this.state.paceHours * 3600;
    } 
    if (this.state.paceMinutes !== ''){
      paceSeconds += +this.state.paceMinutes * 60;
    }
    if(this.state.paceSeconds !== ''){
      paceSeconds += +this.state.paceSeconds;
    }

    this.setState({distance: (totalSeconds/paceSeconds).toFixed(2)});
  }

   render() {
    return (
      <div class="container">
        <h1>Pace Calculator</h1>
        <PaceInput hours={this.state.paceHours} minutes={this.state.paceMinutes} seconds={this.state.paceSeconds}
        updatePaceHours={this.updatePaceHours} updatePaceMinutes={this.updatePaceMinutes} updatePaceSeconds={this.updatePaceSeconds}
        calculatePace={this.calculatePace}/>
        <OverallInput hours={this.state.timeHours} minutes={this.state.timeMinutes} seconds={this.state.timeSeconds}
        updateTimeHours={this.updateTimeHours} updateTimeMinutes={this.updateTimeMinutes} updateTimeSeconds={this.updateTimeSeconds}
        calculateOverallTime={this.calculateOverallTime}/>
        <DistanceInput distance={this.state.distance} calculateDistance={this.calculateDistance} updateDistance={this.updateDistance}/>
      </div>
    );
  }
}

export default App;
