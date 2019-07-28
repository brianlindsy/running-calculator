import React from 'react';
import './App.css';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         time_seconds: '',
         time_minutes: '',
         time_hours: '',
         pace_hours: '',
         pace_minutes: '',
         pace_seconds: '',
         distance: ''
      };

      this.calculate_overall_time = this.calculate_overall_time.bind(this);
      this.calculate_distance = this.calculate_distance.bind(this);
      this.calculate_pace = this.calculate_pace.bind(this);
      this.updatePaceHours = this.updatePaceHours.bind(this);
      this.updatePaceMinutes = this.updatePaceMinutes.bind(this);
      this.updatePaceSeconds = this.updatePaceSeconds.bind(this);
      this.updateTimeHours = this.updateTimeHours.bind(this);
      this.updateTimeMinutes = this.updateTimeMinutes.bind(this);
      this.updateTimeSeconds = this.updateTimeSeconds.bind(this);
      this.updateDistance = this.updateDistance.bind(this);
   };

   updatePaceHours(e) {
      this.setState({pace_hours: e.target.value});
   }
   updatePaceMinutes(e) {
      this.setState({pace_minutes: e.target.value});
   }
   updatePaceSeconds(e) {
      this.setState({pace_seconds: e.target.value});
   }
   updateTimeHours(e) {
      this.setState({time_hours: e.target.value});
   }
   updateTimeMinutes(e) {
      this.setState({time_minutes: e.target.value});
   }
   updateTimeSeconds(e) {
      this.setState({time_seconds: e.target.value});
   }
   updateDistance(e) {
      this.setState({distance: e.target.value});
   }

   calculate_overall_time(e) {
    e.preventDefault();
    console.log("CalculateOverallTime()");
    var total_seconds = 0;
    if(this.state.pace_hours !== ''){
      total_seconds += +this.state.pace_hours * 3600;
    } 
    if (this.state.pace_minutes !== ''){
      total_seconds += +this.state.pace_minutes * 60;
    }
    if(this.state.pace_seconds !== ''){
      total_seconds += +this.state.pace_seconds;
    }

    total_seconds *= +this.state.distance;

    var hours, minutes, seconds;

    if(total_seconds > 3600){
      hours = Math.round(total_seconds / 3600);
      minutes = Math.round((total_seconds - (hours * 3600)) / 60);
      seconds = Math.round((total_seconds - ((hours * 3600) - minutes * 60)) / 60);
      this.setState({time_hours: hours});
      this.setState({time_minutes: minutes});
      this.setState({time_seconds: seconds});
    }

    if(total_seconds > 60 && total_seconds < 3600){
      minutes = Math.round(total_seconds  / 60);
      seconds = Math.round((total_seconds - (minutes * 60)) / 60);
      this.setState({time_minutes: minutes});
      this.setState({time_seconds: seconds});
    }

    if(total_seconds < 60){
      this.setState({time_seconds: total_seconds});
    }
  }

  calculate_pace(e) {
    e.preventDefault();
    console.log("CalculatePace()");
    var pace = 0;

    if(this.state.time_hours !== ''){
      pace += +this.state.time_hours * 3600;
    } 
    if (this.state.time_minutes !== ''){
      pace += +this.state.time_minutes * 60;
    }
    if(this.state.time_seconds !== ''){
      pace += +this.state.time_seconds;
    }

    var hours, minutes, seconds;

    pace /= +this.state.distance;

    if(pace > 3600){
      hours = Math.floor(pace / 3600);
      minutes = Math.floor((pace - (hours * 3600)) / 60);
      seconds = Math.round((pace - (hours * 3600)) % 60);
      this.setState({pace_hours: hours});
      this.setState({pace_minutes: minutes});
      this.setState({pace_seconds: seconds});
    }

    if(pace > 60 && pace < 3600){
      minutes = Math.floor(pace  / 60);
      seconds = Math.round(pace % 60);
      this.setState({pace_minutes: minutes});
      this.setState({pace_seconds: seconds});
    }

    if(pace < 60){
      this.setState({pace_seconds: pace});
    }
  }

  calculate_distance(e) {
    e.preventDefault();
    console.log("CalculatePace()");
    var total_seconds = 0, pace_seconds = 0;

    if(this.state.time_hours !== ''){
      total_seconds += +this.state.time_hours * 3600;
    } 
    if (this.state.time_minutes !== ''){
      total_seconds += +this.state.time_minutes * 60;
    }
    if(this.state.time_seconds !== ''){
      total_seconds += +this.state.time_seconds;
    }
    if(this.state.pace_hours !== ''){
      pace_seconds += +this.state.pace_hours * 3600;
    } 
    if (this.state.pace_minutes !== ''){
      pace_seconds += +this.state.pace_minutes * 60;
    }
    if(this.state.pace_seconds !== ''){
      pace_seconds += +this.state.pace_seconds;
    }

    this.setState({distance: (total_seconds/pace_seconds).toFixed(2)});
  }

   render() {
    return (
      <div class="container">
        <h1>Pace Calculator</h1>
        <form class="form-inline">
          <label for="pace">Pace: </label>
          <input type="text" class="form-control" id="hours" placeholder={this.state.pace_hours} onChange={this.updatePaceHours}/>
          <input type="text" class="form-control" id="minutes" placeholder={this.state.pace_minutes} onChange={this.updatePaceMinutes}/>
          <input type="text" class="form-control" id="seconds" placeholder={this.state.pace_seconds} onChange={this.updatePaceSeconds}/>
          <button type="submit" class="btn btn-primary" onClick={this.calculate_pace}>Get Pace</button>
        </form>
        <form class="form-inline">
          <label for="time">Overall Time: </label>
          <input type="text" class="form-control" id="hours" placeholder={this.state.time_hours} onChange={this.updateTimeHours}/>
          <input type="text" class="form-control" id="minutes" placeholder={this.state.time_minutes} onChange={this.updateTimeMinutes}/>
          <input type="text" class="form-control" id="seconds" placeholder={this.state.time_seconds} onChange={this.updateTimeSeconds}/>
          <button type="submit" class="btn btn-primary" onClick={this.calculate_overall_time}>Get Overall Time</button>
        </form>
        <form class="form-inline">
          <label for="distance">Distance </label>
          <input type="text" class="form-control" id="distance" placeholder={this.state.distance} onChange={this.updateDistance}/>
          <button type="submit" class="btn btn-primary" onClick={this.calculate_distance}>Distance</button>
        </form>
      </div>
    );
  }
}

export default App;
