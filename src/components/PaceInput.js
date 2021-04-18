import React from 'react';
import CalculateButton from './buttons/CalculateButton.js';

class PaceInput extends React.Component {
   constructor(props) {
      super(props);

      this.updatePaceHours = this.updatePaceHours.bind(this);
      this.updatePaceMinutes = this.updatePaceMinutes.bind(this);
      this.updatePaceSeconds = this.updatePaceSeconds.bind(this);
   };

   updatePaceHours(e) {
      this.props.updatePaceHours(e.target.value);
   }
   updatePaceMinutes(e) {
      this.props.updatePaceMinutes(e.target.value);
   }
   updatePaceSeconds(e) {
      this.props.updatePaceSeconds(e.target.value);
   }

   render(){
      return(
      <form class="form-inline">
         <label for="pace">Pace: </label>
         <input type="text" class="form-control" id="hours" value={this.props.hours} onChange={this.updatePaceHours}/>
         <input type="text" class="form-control" id="minutes" value={this.props.minutes} onChange={this.updatePaceMinutes}/>
         <input type="text" class="form-control" id="seconds" value={this.props.seconds} onChange={this.updatePaceSeconds}/>
         <CalculateButton name="Get Pace" calculateFunc={this.props.calculatePace}></CalculateButton>
      </form>
      );
   }
}
export default PaceInput;