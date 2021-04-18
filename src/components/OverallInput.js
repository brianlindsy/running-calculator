import React from 'react';

class OverallInput extends React.Component {
   constructor(props) {
      super(props);

      this.updateTimeHours = this.updateTimeHours.bind(this);
      this.updateTimeMinutes = this.updateTimeMinutes.bind(this);
      this.updateTimeSeconds = this.updateTimeSeconds.bind(this);
   };

   updateTimeHours(e) {
      this.props.updateTimeHours(e.target.value);
   }
   updateTimeMinutes(e) {
      this.props.updateTimeMinutes(e.target.value);
   }
   updateTimeSeconds(e) {
      this.props.updateTimeSeconds(e.target.value);
   }

   render(){
      return(
      <form class="form-inline">
         <label for="time">Overall Time: </label>
         <input type="text" class="form-control" id="hours" value={this.props.hours} onChange={this.updateTimeHours}/>
         <input type="text" class="form-control" id="minutes" value={this.props.minutes} onChange={this.updateTimeMinutes}/>
         <input type="text" class="form-control" id="seconds" value={this.props.seconds} onChange={this.updateTimeSeconds}/>
         <button type="submit" class="btn btn-primary" onClick={this.props.calculateOverallTime}>Get Overall Time</button>
        </form>
      );
   }
}
export default OverallInput;